var bullet, wall, speed, weight, thickness





function setup() {
  createCanvas(1600,400);
  
speed=random(55,90)
thickness=random(22,83)

weight=random(400,1500)
bullet = createSprite(50,200,50,50);
bullet.shapeColor=color(255)
bullet.velocityX=speed

wall= createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80)

}

function draw() {
  background(0);
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0
  var deformation=0.5 * weight * speed * speed / thickness * thickness * thickness;
  if(deformation>0.1){
    wall.shapeColor=color("red")
  }
  if(deformation<100 && deformation>0.1){
    wall.shapeColor=color("orange");
  }
  if(deformation<100){
    wall.shapeColor=("green")
  }
}
  drawSprites();
  bullet.display();
}