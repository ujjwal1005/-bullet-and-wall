var wall ,thickness ;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
 
  bullet = createSprite(500,200,70,20);
  bullet.shapecolor = color(255);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapecolor = color (80,80,80);

  
}

function draw() {
  background(0,0,0);
   
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  
  if(hasCollided(bullet,wall))
  {
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness *thickness);

  if(damage>10)
{
  wall.shapecolor = color(255,0,0);
}
  if(damage<10)
{
  wall.shapecolor = color(0,255,0);
}
  }

 drawSprites();
}

function hasCollided(lbullet,lwall)
{
  
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true ;
  }            
  return false;                         
}


