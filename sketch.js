const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var pcb;
var pbase;
var pimg;
var cimg;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   pcb = new ComputerBase(width-250, random(450, height-300), 180, 150);
   pbase = new PlayerBase(width-1050, random(450, height-300), 180, 150);
   pimg = new PlayerImg(width-1050, pbase.y-153, 0, 0);
   cimg = new CompImg(width-300, pcb.y-153, 0, 0);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  pcb.display();
  pbase.display();
  
   //display Player and computerplayer
 
  pimg.display();
  cimg.display();

}
