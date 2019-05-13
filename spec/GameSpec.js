describe('Game', function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('can calculate a gutter game', function(){
    for (i = 0; i < 20; i++) {
    game.roll(0)
  };
  expect(game.score).toEqual(0)
  });

  it('can roll all ones', function(){
    for (i = 0; i < 20; i++) {
    game.roll(1)
  };
  expect(game.score).toEqual(20)
  });
});
