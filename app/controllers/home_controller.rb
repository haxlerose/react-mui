# frozen_string_literal: true

class HomeController < ApplicationController

  def search; end

  def results
    @header = [{ 'field': 'nameFirst', 'headerName': 'First Name', 'width': 120 },
               { 'field': 'nameLast', 'headerName': 'Last Name', 'width': 120 },
               { 'field': 'born', 'headerName': 'Born', 'width': 120 },
               { 'field': 'birthLocation', 'headerName': 'Birth City', 'width': 350 },
               { 'field': 'died', 'headerName': 'Died', 'width': 120 },
               { 'field': 'debut', 'headerName': 'Debut', 'width': 120 },
               { 'field': 'finalGame', 'headerName': 'Final Game', 'width': 120 },
               { 'field': 'careerLength', 'headerName': 'Career Length', 'width': 150 }]
    @results = found_players(params[:q]).each_with_object([]) do |player, array|
      array.push({ 'id': player['playerID'],
                   'nameFirst': player['nameFirst']&.titleize,
                   'nameLast': player['nameLast']&.titleize,
                   'born': birthdate(player),
                   'birthLocation': birth_city(player),
                   'died': deathdate(player),
                   'debut': parsed_date(player['debut']),
                   'finalGame': parsed_date(player['finalGame']),
                   'careerLength': career_length(player) })
    end
  end

  private

  def player_data
    data = File.open('Master.csv') { |file| CSV.parse file }
    data[1..].each_with_object([]) do |player, array|
      temp_hash = {}
      data.first.each_with_index { |key, index| temp_hash[key] = player[index]&.downcase }
      array << temp_hash
    end
  end

  def found_players(query)
    players = player_data
    players.select { |player| [player['nameFirst'], player['nameLast'], player['nameGiven']].grep(/#{query&.downcase}/).any? }
  end

  def birth_city(player)
    city = player['birthCity']&.titleize
    state = if player['birthState'] && player['birthCity'] != player['birthState'] && player['birthState']&.length < 4
              player['birthState']&.upcase
            else
              player['birthState']&.titleize
            end
    country = player['birthCountry'] == 'united kingdom' ? 'UK' : player['birthCountry']&.upcase
    "#{city}#{', ' if city}#{state}#{', ' if state}#{country}"
  end

  def birthdate(player)
    year = player['birthYear']
    b_day = "#{year}-#{player['birthMonth']}-#{player['birthDay']}"
    b_day.to_date
  rescue Date::Error
    year
  end

  def deathdate(player)
    year = player['deathYear']
    d_day = "#{year}-#{player['deathMonth']}-#{player['deathDay']}"
    d_day.to_date
  rescue Date::Error
    year
  end

  def parsed_date(date)
    date&.to_date
  rescue Date::Error
    d_date
  end

  def career_length(player)
    if player['finalGame'] && player['debut']
      length = (parsed_date(player['finalGame']) - parsed_date(player['debut'])).to_i.days
      parts = ActiveSupport::Duration.build(length).parts
      years = parts[:years]
      months = parts[:months]
      days = parts[:days]
      "#{years}#{' yr, ' if years}#{months}#{' mo, ' if months}#{days} days"
    end
  end
end
