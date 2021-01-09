const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,ball;
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options ={ isStatic: true }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
   World.add(world,ground);
   var ball_options={restitution:0.5}
   ball=Bodies.circle(200,100,20,ball_options);
   World.add(world,ball)
   wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20); 
  ellipseMode(RADIUS);
   ellipse(ball.position.x, ball.position.y, 20, 20);
   speed=random(223,321)
   weight=random(30,52)
   thickness=random(22,83)
  drawSprites();

function hasCollided(lbullet,lwall)
{
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
    return false;
}

if(hasCollided(bullet,wall))
{
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damage>10)
    {
        wall.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
        wall.shapeColor=color(0,255,0);
    }
}

}