var canvas;
var music;
var orange, purple, blue, green
var ball
var edges





function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1450,1450);
    

    //create 4 different surfaces
    green = createSprite(1265,760,350,30)
    green.shapeColor = "green"
    
    purple = createSprite(900,760,350,30)
    purple.shapeColor = "purple"

    orange = createSprite(535,760,350,30)
    orange.shapeColor = "orange"
    
    blue = createSprite(170,760,350,30)
    blue.shapeColor = "blue"
    
    //create box sprite and give velocity
    ball = createSprite(300,50,30,30)
    ball.shapeColor = "white"

    ball.velocityX = 5
    ball.velocityY = 10
}

function draw() {
    background(0);

    ball.bounceOff(green)
    ball.bounceOff(purple)
    ball.bounceOff(orange)
    ball.bounceOff(blue)

    edges = createEdgeSprites()
    ball.bounceOff(edges)
  
    if(ball.isTouching(green)){
      //change color here
      ball.shapeColor = "green"
  }
  
  
  
  
  
  drawSprites();
}
