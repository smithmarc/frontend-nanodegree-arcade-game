// Enemies our player must avoid
var Enemy = function(x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';

  // this.x and this.y provided in render function
  this.x = x;
  this.y = y;

  // We'd need a speed variable to determine the speed the enemies cross the
  // canvas at. This variable would have a random value.
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += Math.floor((Math.random() * 500) + 1) * dt;

  if (this.x > 540) {
    this.x = Math.floor((Math.random() * -500) + -100);
    this.x += Math.floor((Math.random() * 1000) + 1) * dt;
  };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Create Player as exact copy of Enemy class
var Player = function(x, y) {
  // Make sure the image for the sprite you want to use is loaded in engine.
  this.sprite = 'images/char-cat-girl.png';
  this.x = x;
  this.y = y;
};

Player.prototype.update = function(dt){
  // Do we need any code here?
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function() {
  // Some sort of reference to allowedKeys
  // Are we supposed to use if/else loops here when keys are pressed?
  // if 'left' is pressed, move Player(100,0); TODO
};

// Now instantiate your objects.
// X position would be a negative value, to prevent pop-in of enemy object.
// Y position closely matches the layout of the path.
var enemyTop = new Enemy(-105, 61);
var enemyMid = new Enemy(-105, 144);
var enemyBot = new Enemy(-105, 228);
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// var allEnemies = [new Enemy(5, 61), new Enemy(5, 144), new Enemy(5, 228)];
allEnemies.push(enemyTop);
allEnemies.push(enemyMid);
allEnemies.push(enemyBot);
// Place the player object in a variable called player
var player = new Player(202.5, 380);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);

});
