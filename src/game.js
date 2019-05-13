function Game (){
  this.rolls = [ ]
  this.currentRoll = 0
};

Game.prototype.roll = function(pins) {
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function(){
  var score = 0
  var frameIndex = 0
  for (var frame = 0; frame < 10; frame++) {
    if(this.rolls[frameIndex] == 10)
    {
      score += 10 + this.rolls[frameIndex+1] + this.rolls[frameIndex+2]
      frameIndex++;
    }
    else if(this._isSpare(frameIndex))
    {
      score += 10 + this.rolls[frameIndex+2];
      frameIndex += 2;
    } else {
  score += this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  frameIndex += 2
  }
}
  return score
}

Game.prototype._isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
}
