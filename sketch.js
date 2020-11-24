var player,score, bricksG, bricks,bomb,bombG,stars,starG,stand,edges;
function preload(){
  img = loadImage("Daco_4461644.png");
  bg1img = loadImage("bg2.png")
  brickimg = loadImage("brick.png");
  bombimg = loadImage("bomb3.png");
  starimg = loadImage("star.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites();
  background = createSprite(0,0,400,400)
  background.addImage(bg1img);   
  background.scale = 1.3 
  player = createSprite(50,0,10,10);
  player.addImage(img)
  stand = createSprite(windowWidth/2,-windowHeight,800,10);
  brickG = new Group();
  bombG = new Group();
  starG = new Group();
  score = 0 
}

function draw() {
  //console.log(player.y);
  //background(bg1img);
  background.velocityX = -3;
  player.bounceOff(edges);

  if(player.isTouching(bombG)){
    brickG.destroyEach();
    background.velocityX = 0
    starG.destroyEach();
  }

  if(background.x < windowWidth/2){
    background.x = background.width/2;
  }
  //player.y = stand.y;
  //if(player.x < 0||player.x>windowWidth){
    //player.x = windowWidth/2;
  //}

  if(keyDown("space")){
    player.velocityY = -100;
  }
  if(keyDown("right_arrow")){
    player.velocityX = 5;
  }
   if(keyDown("left_arrow")){
    player.velocityX = -5;
  }

  //stand.velocityX = player.velocityX;
  player.velocityY += 0.8
  stand.velocityX = 10;
  if(player.collide(brickG)){
    player.velocityY =0;
    score = score + 1;
  } 
  
  
 
  spawnstars()
  spawnBricks();
  spawnBombs();
  drawSprites();
   fill("red");
  textSize(20)
  text("Score: "+score, 210,30);
}
function spawnBricks(){
  if(frameCount % 1 === 0){
bricks = createSprite(windowWidth,Math.round(random(windowHeight-400,windowHeight-100)));
bricks.addImage(brickimg)
    bricks.shapeColor = "brown"
  bricks.velocityX = -3;
     brickG.add(bricks);
  }
  
}
function spawnBombs(){
  if(frameCount % 200 === 0){
bomb = createSprite(600,Math.round(random(windowHeight-400,windowHeight-100)));
bomb.addImage(bombimg)
    //bricks.shapeColor = "brown"
  bomb.velocityX = -3;
     bombG.add(bricks);
  }
  
}
function spawnstars(){
  if(frameCount % 300 === 0){
stars = 
createSprite(800,Math.round(random(windowHeight-500,windowHeight-10)));
stars.addImage(starimg)
    //bricks.shapeColor = "brown"
  stars.velocityX = -3;
     starG.add(stars);
  }
  
}



