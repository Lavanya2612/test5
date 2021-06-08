const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var coins=0
var database;
var lives=2


var form, player, game;

function preload(){
  img1= loadImage('images/capture1.png') 


}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  engine = Engine.create();
  world = engine.world;
  //database = firebase.database();
 form=new Form()

 form1=new Instructions()
 
 game1= createSprite (displayWidth/2 -630,displayHeight/2 +100,200,20)
game2= createSprite(displayWidth/2 -500,displayHeight/2 -340 +100,150,20)
game3= createSprite(displayWidth/2 -565,displayHeight/2 -260 +100,20,150)
game4=  createSprite(displayWidth/2 -325,displayHeight/2 -190 +100,500,20)
game5=  createSprite(displayWidth/2 -365,displayHeight/2 -110 +100,20,150)
game6=  createSprite(displayWidth/2 -85,displayHeight/2 -110 +100,20,150)
game7= createSprite(displayWidth/2 -220,displayHeight/2-250 ,20,300)
game8=  createSprite(displayWidth/2 -220,displayHeight/2+145 ,20,170)
game9=  createSprite(displayWidth/2 -150,displayHeight/2+70 ,150,20)
game10= createSprite (displayWidth/2 -360,displayHeight/2 +240,300,20)
game11= createSprite(displayWidth/2 -85,displayHeight/2 +310,20,150)
game12= createSprite(displayWidth/2 +285,displayHeight/2 +210 +100,20,150)
game13= createSprite (displayWidth/2 +280,displayHeight/2 +240,300,20)
game14= createSprite (displayWidth/2 +135,displayHeight/2 +170,20,150)
 game15= createSprite(displayWidth/2 +425,displayHeight/2 +170,20,150)
game16= createSprite (displayWidth/2 +420,displayHeight/2 +90,200,20)
game17= createSprite (displayWidth/2 +330,displayHeight/2+5 ,20,150)
game18=  createSprite(displayWidth/2 +530,displayHeight/2-75 ,20,350)
game19= createSprite(displayWidth/2 +200,displayHeight/2 -60,250,20)
game20=  createSprite(displayWidth/2 +80,displayHeight/2-130 ,20,150)
game21= createSprite(displayWidth/2 +400,displayHeight/2 -240 ,250,20)
game22= createSprite (displayWidth/2 +15,displayHeight/2 -210 ,150,20)
game23= createSprite (displayWidth/2 +625,displayHeight/2 +280 ,150,20)  
 coin1= createSprite(70,20,10,10)

  girl= createSprite(displayWidth/2 -630,displayHeight/2 -300,100,100)
  girl.debug=true
  girl.setCollider('circle',0,0,40)

}


function draw(){
  background('lightBlue')
  Engine.update(engine);
  if(gameState===0){
      form.display()
  }

  if(gameState===1){
    form1.display()
}

if(gameState===2){

  
edges= createEdgeSprites()
girl.collide(edges)

if(girl.isTouching(coin1)){
  coin1.destroy()
  coins=coins+1}

  drawSprites()
  fill ('black')
  text('COINS: '+ coins,700,20)

  fill ('black')
  text('LIVES: '+ lives,900,20)
  girl.addImage(img1)
  girl.scale=0.7

  if(girl.isTouching(game1)||girl.isTouching(game2)){
    girl.x=displayWidth/2 -630
    girl.y=displayHeight/2 -300}


}


}

function keyPressed(){

  if(keyCode===UP_ARROW){
      girl.y= girl.y -10
  }

  if(keyCode===DOWN_ARROW){
    girl.y= girl.y +10
}

if(keyCode===LEFT_ARROW){
  girl.x= girl.x -10
}

if(keyCode===RIGHT_ARROW){
  girl.x= girl.x +10
}




  
  
  }
