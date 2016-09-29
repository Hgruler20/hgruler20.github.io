/*global createCanvas*/
/*global createSprite*/
/*global width*/
/*global height*/
/*global keyDown*/
/*global RIGHT_ARROW*/
/*global LEFT_ARROW*/
/*global background*/
/*global drawSprites*/
var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;

function preload(){
    playerImage = loadImage("avatar_e3b30a50adad_128.png");
    enemyImage = loadImage("s-l225.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}/*

function preload() {
  playerImage = loadImage("http://kanyeheads.tumblr.com/post/29904322386");
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
  backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}
*/
/*function setup() {
    isGameOver = false;
    createCanvas(256, 256);
    player =createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width / 2 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
}*/

function setup() {
  isGameOver = false;
  createCanvas(256, 256);
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 4.0;
}

/* function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)){
            isGameOver = true;
        }
    
   if (enemy.overlap(player)) {
       gameOver();
   } 
    background(backgroundImage);
*/
function draw() {
  if (isGameOver) {
    gameOver();
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    if (enemy.overlap(player)) {
      gameOver();
    }
    background(backgroundImage);


if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
    player.position.x += 2;
}
if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
    player.position.x -= 2;
}
enemy.position.y = enemy.position.y + 3;

if (enemy.position.y > height) {
    enemy.position.y = 0;
    enemy.position.x = random(5, width - 5);
}
    drawSprites();
}
}



function gameOver() {
    background(0);
    textAilgn(CENTER);
    fill("white");
    text("Game Over!", width / 2, height / 2);
    text("Click anywhere to try again", width / 2, 3 * height / 4);
}

function mouseClicked() {
    isGameOver = false;
    player.position.x = width / 2;
    player.position.y = height - (playerImage.height / 2);
    enemy.position.x = width / 2;
    enemy.position.y = 0;
}