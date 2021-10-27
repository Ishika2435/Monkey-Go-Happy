var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey, monkey_running, ground;
var banana, bananaImage, obstacle, obstacleImage;

var FoodGroup, obstacleGroup;
var score;

var survivalTime = 0;

function preload() {
  monkey_running = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(500, 500);

  //creating monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 90, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);
}

function draw() {
  background("white");

  if (gameState === PLAY) {
    score = score + Math.round(getFrameRate() / 60);
    ground.velocityX = -(6 + (3 * score) / 100);

    if (keyDown("space") && trex.y >= 159) {
      monkey.velocityY = -12;
    }

    monkey.velocityY = monkey.velocityY + 0.8;

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
  }
  monkey.collide(ground);

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameRate());
  text("Survival: " + score, 100, 50);

  drawSprite();
}

function spawnBanana() {
  //write code here to spawn the banana
  if (frameCount % 60 === 0) {
    var bamana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(80, 120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 200;

    //add each cloud to the group
    FoodGroup.add(banana);
  }
}
