class Game

  include DataMapper::Resource

  property :id, Serial
  property :player1, String
  property :player2, String
  property :player1_pick, String
  property :player2_pick, String
  property :winner, String

end