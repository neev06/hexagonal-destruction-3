const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var support,support2;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var box21;
var box22;
var box23;
var box24;
var box25;
var box26;
var box27;
var box28;
var box29;
var box30;
var obj;
var slingshot;
var support3,support4;
var backgroundImg;
var bg;
function preload() {
  backgroundImg = loadImage("bg.png");}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  support=new Ground(400,300,150,10);
  support2=new Ground(700,150,150,10);
  support3=new Ground(400,390,800,10);
  //support4=new Ground(800,200,10,400);
box1=new Box(400,275,25,25);
box2=new Box(375,275,25,25);
box3=new Box(350,275,25,25);
box4=new Box(425,275,25,25);
box5=new Box(450,275,25,25);
box6=new B(432.5,255,20,20);
box7=new B(387.5,255,20,20);
box8=new B(362.5,255,20,20);
box9=new B(414,255,20,20);
box10=new Box2(400,240,15,15);
box11=new Box2(423,240,15,15);
box12=new Box2(380,240,15,15);
box13=new Box3(411,225,15,15);
box14=new Box3(389,225,15,15);
box15=new Box4(402,215,15,15);
box16=new Box(700,125,25,25);
box17=new Box(675,125,25,25);
box18=new Box(650,125,25,25);
box19=new Box(725,125,25,25);
box20=new Box(750,125,25,25);
box21=new B(687.5,105,20,20);
box22=new B(662.5,105,20,20);
box23=new B(712.5,105,20,20);
box24=new B(737,105,20,20);
box25=new Box2(680,90,15,15);
box26=new Box2(700,90,15,15);
box27=new Box2(718,90,15,15);

box28=new Box3(690,75,15,15);
box29=new Box3(710,75,15,15);
box30=new Box4(700,60,15,15);
obj=new Poly(100,200,30);
slingshot = new SlingShot(obj.polygon,{x:100, y:200});
}

function draw() {
  background(backgroundImg); 
time();
  Engine.update(engine);
  support.display(); 
  support2.display(); 
  support3.display(); 
  ///support4.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  slingshot.display();
  box25.display();
  box26.display();
  box27.display();
 box28.display();
 box29.display();
 box30.display();
obj.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(obj.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
  
      slingshot.attach(obj.polygon);
  
  }
}
async function time(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responsejson= await response.json();
  var dt= responsejson.datetime;
  var hour=dt.slice(11,13);
  console.log(hour);
  if(hour>=06&&hour<=18){
  
  bg="bg.png";
  
  
  }
  else{
  bg="bg2.jpg";
  
  
  }
  backgroundImg=loadImage(bg);
  }