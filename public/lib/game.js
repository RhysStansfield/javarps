function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.outcome = function() {

  this.pairs = {
    'rock': { 'beats': ['scissors', 'lizard'], 'verb': ['crushes', 'crushes']},
    'paper': { 'beats': ['rock', 'spock'], 'verb': ['covers', 'disproves'] },
    'scissors': { 'beats': ['paper', 'lizard'], 'verb': ['cuts', 'decapitates'] },
    'spock': { 'beats': ['rock', 'scissors'], 'verb': ['vaporizes', 'smashes'] },
    'lizard': { 'beats': ['paper', 'spock'], 'verb': ['eats', 'poisons'] }
  };

  this.n = this.pairs[this.player1.pick]['beats'].indexOf(this.player2.pick);
  this.bleh = this.pairs[this.player2.pick]['beats'].indexOf(this.player1.pick);

  if (this.player1.pick == this.player2.pick) {
    return {
      winner: null,
      loser: null,
      pick1: 'You',
      verb: 'both',
      pick2: 'suck'
    };
  }
  else if (this.pairs[this.player1.pick]['beats'].indexOf(this.player2.pick) != -1) {
    return {
      winner: this.player1,
      loser: this.player2,
      pick1: this.player1.pick,
      verb: this.pairs[this.player1.pick]['verb'][this.n],
      pick2: this.player2.pick
    };
  }
  else {
    return {
      winner: this.player2,
      loser: this.player1,
      pick1: this.player2.pick,
      verb: this.pairs[this.player2.pick]['verb'][this.bleh],
      pick2: this.player1.pick
    };
  };
};

Game.prototype.winner = function() {
  return this.outcome().winner;
};

Game.prototype.loser = function() {
  return this.outcome().loser;
}

Game.prototype.output = function() {
  if (this.outcome().winner == null) {
    var whoBeatWho = this.outcome().pick1.capitalize() + ' ' + this.outcome().verb + ' ' + this.outcome().pick2 + '!';
  }
  else {
    var winzor = this.outcome().winner.name;
    var whoBeatWho = winzor + ' wins!  ' + this.outcome().pick1.capitalize() + ' ' + this.outcome().verb + ' ' + this.outcome().pick2 + '!';
  };  
  return whoBeatWho;
};
