# frozen_string_literal: true

class HomeController < ApplicationController
  def search
    creds = Rails.application.credentials
    host = creds[:rapid_host]
    response = HTTParty.get("https://#{host}/title/find?q=#{params[:q]}",
                            headers: { 'x-rapidapi-host' => host,
                                       'x-rapidapi-key' => creds[:rapid_api_key] })
    @results = response['results']
  end
end
