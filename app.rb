require 'sinatra'

require_relative './app/game'

get '/' do
  erb :index
end

get '/message' do
  'Hello world!'
end

post '/write' do
  Game.create(
    player1: params[:player1], 
    player2: params[:player2], 
    player1_pick: params[:player1Pick],
    player2_pick: params[:player2Pick],
    winner: params[:winner]
  )
  'write successfully'
end

get '/stats' do
  # Game.count(conditions: [ 'winner = ?', 'AM'])
  Game.count(winner: 'AM').to_s
end