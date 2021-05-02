const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
var ball
var engine
function setup() {
engine=Engine.create()
world=engine.world
  createCanvas(800,400);
 ball=new Ball(200,200,25)
 ground=new Ground(400,397.5,800,7.5)
 box=new Box(300,200,50,50)
crane=new Crane(ball.box,{x:50,y:300})
}

function draw() {
  background("black");
  Engine.update(engine) 
  ball.Display();
  ground.Display();
  box.Display();
  crane.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.box,{x:mouseX,y:mouseY})
}