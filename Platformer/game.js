var isGameOver;
var score;

var GRAVITY = 0.3;
var JUMP = -5

var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;

var player

function setup() {
   isGameOver = flase
   score = 0
   
    createcanvas(400,300);
    background(150, 200, 250)
    groundSprites = new Group();
    
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1;
    
    for (var n = 0; n <numGroundSprites; n++) {
        var groundSprites = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }
    
    player = createSprite(100, height-75, 50, 50)
    
    obstacleSprites = new Group();
}

function draw() {
 if (isGameOver) {
     background(0);
     fill(255);
     textAlign(CENTER);
     text("Your score was: " = score, camera.position.x, camera.position.y - 20);
     text("Game Over! Click anwhere to restart", camera.position.x, cmaera.position.y);
     
 } else {
     
    background(150, 200, 250)
    player.velocity.y = player.velocity.y + GRAVITY;
    
    if (groundSprites.overlap(player)){
        player.velpcity.y = 0
        playerposition.y = (height-50) - (player.height/2);
    }
    
    if (keydown(UP_ARROW)) {
        player.velocity.y = JUMP;
    }
    player.position.x= player.position.x = 5
    camera.position.x = player.position.x + (width/4);
    
    var firstGroundSprite - groundSprites[0];
    if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
        groundSprites.remove(firstGroundSprite);
        firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
        groundSprites.add(firstGroundSprite);
    }
    
    if (random() > 0.95) {
        var obstacle - createSprite(camera.position.x + width, random(0, (height-50)-15), 30, 30);
        obstacleSprites.add(obstacle);
    }
    
    
 }
 
}