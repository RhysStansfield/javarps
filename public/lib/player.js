function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.picksAI = function() {
  var options = ['rock', 'paper', 'scissors', 'spock', 'lizard']
  this.pick = options.randomElement()
}