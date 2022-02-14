class HomeController < ApplicationController
  def show
    @home_data = {
      dataKey: 'dataValue',
      dataKey2: 'dataValue2',
      dataKey3: 'dataValue3'
    }.to_json
    puts ">>>>> DATA FROM CONTROLLER: #{@home_data}"
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
end
