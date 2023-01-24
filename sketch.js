
var path
var pathm
var main
var mainm
var gameOver
var gameOverImg

var pinkOK, yellowOK, redOK
var player1,player2,player3

var oppPink1Img,oppPink2Img
var oppYellow1Img,oppYellow2Img
var oppRed1Img,oppRed2Img

var distance = 0 

var player1,player2,player3
var mainRacerImg1,mainRacerImg2


function preload() {

  pathm = loadImage("Road.png")
  mainm = loadImage("mainPlayer1.png")
  gameOverImg = loadImage("gameOver.png")

  oppPink1Img = loadAnimation("opponent1.png", "opponent2.png")
  oppPink2Img = loadImage("opponent3.png")

  oppYellow1Img = loadAnimation("opponent4.png", "opponent5.png")
  oppYellow2Img = loadImage("opponent6.png")

  oppRed1Img = loadAnimation("opponent7.png", "opponent8.png")
  oppRed2Img = loadImage("opponent9.png")
}

function setup() {
  createCanvas(1200, 300);

  //Making Road
  path = createSprite(100, 150)
  path.addImage("Road",pathm)
  path.velocityX = -5

  // main cycle 
  main = createSprite(70, 150)
  main.addImage("Cycle",mainm)
  main.scale = 0.07

  gameOver = createSprite(650, 150)
  gameOver.addImage(gameOverImg)
  gameOver.scale = 0.8
  gameOver.visible = false

  pinkOK = new Group();
  yellowOK = new Group();
  redOK = new Group();
}

function draw() {
  background(51);

  distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
  
   main.y = World.mouseY;
  
   edges= createEdgeSprites();
   main.collide(edges);

// continuous road
  if(path.x < 0 ){
    path.x = width/2;
  }
  
  //creating continous opp players
  var select_oppPlayer = Math.round(random(1,3));
  
  if (World.frameCount % 150 == 0) {
    if (select_oppPlayer === 1) {
      console.log("hi");
      pinkCycle();
    } else if (select_oppPlayer === 2) {
      console.log("hello")
      yellowCycle();
    } else {
     console.log
     
     ("m in else")
      redCycle();
    }

  drawSprites();
}}


//making pink cycle
function pinkCycle() {
  player1 = createSprite(1100, Math.round(random(50, 250)))
  player1.addAnimation("Pink",oppPink1Img)
  player1.scale = 0.06
  player1.velocityX = -(6 + 2 * distance / 150)
 
  player1.setLifetime = 170
  pinkOK.add(player1)
}

// making yellow cycle 

function yellowCycle() {
  player2 = createSprite(1100, Math.round(random(50, 250)))
  player2.addAnimation("Yellow",oppYellow1Img)
  player2.scale = 0.06
  player2.velocityX = -(6 + 2 * distance / 150)

  player2.setLifetime = 170
  yellowOK.add(player2)
}

//making red cycle

function redCycle() {
  player3 = createSprite(1100, Math.round(random(50, 250)))
  player3.addAnimation("Red",oppRed1Img)
  player3.scale = 0.06
  player3.velocityX = -(6 + 2 * distance / 150)
 
  player3.setLifetime = 170
  redOK.add(player3)
}