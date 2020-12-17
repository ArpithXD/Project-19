var bg, bgImage;
var player, playerImage;
var bullet, bulletImage, bulletGroup;
var score = 0;

var gameState = "play";


function preload() {
  
  bgImage = loadImage("sci-fi.jpg");  
  playerImage = loadImage("jetpack.png");
  bulletImage = loadImage("bullet.png");
}

function setup() {
  
  createCanvas(600, 340);
  
  //background
  bg = createSprite(300,170,20,20);
  bg.addImage(bgImage);
  bg.velocityX = -3;
  bg.x = bg.width /2;
  
  //player
  player = createSprite(50,170);
  player.addImage(playerImage);
  player.scale = 0.075;
  
  bulletGroup = new Group();
  
}

function draw() {
  background(0);
  
  if (gameState === "play") {
    
  if (bg.x < 100) {
    bg.x = bg.width / 2;
  }
   
  if (keyDown(UP_ARROW)) {
    player.velocityY = -6;
  }
  
  if (keyDown(DOWN_ARROW)) {
    player.velocityY = 6;
  }
  
  if (keyDown("space")) {
    player.velocityY = 0;
  }
  
  if (frameCount%10 === 0) {
    score += 1;
  }
  
  bullets();
  drawSprites();
  
  fill("white");
  textFont("Courier New");
  textSize(15)
  text("Score: " + score, 500,25);    
 
  }
  
  if (player.isTouching(bulletGroup)) {
    gameState = "end";
  }
  
  if (gameState === "end") {
    background(0);
    
    fill("white");
    textFont("Calibri");
    textSize(50);
    text("You Lose!", 200,125);
 
    fill("white");
    textFont("Calibri");
    textSize(25);
    text("Score: " + score, 250,175);
    
    fill("white");
    textFont("Calibri");
    textSize(25);
    text("Press space to restart", 200,225);
    
    
  }
  
  if (keyDown("space")) {
    gameState = "play";
  }

  
  
}

function bullets() {
  
    if (frameCount%75 === 0) {
      bullet = createSprite(600,300,20,20);
      bullet.y = player.y;
      bullet.addImage(bulletImage);
      bullet.scale = 0.1;
      bullet.velocityX = -55;
      bullet.lifetime = 500;
      bulletGroup.add(bullet);
    }  
  
}

























