var car, wall,speed,weight,carDeformation


function setup() {

  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,150,height/2)
  wall.shapeColor=(80,80,80);
  speed=random(55,90);
  weight= random(400,1500)
 // car.debug=true;
 // wall.debug=true
  car.shapeColor="grey"
}

function draw() {
  background(0,0,0);  
 // car.x=World.mouseX;
 // car.y=World.mouseY;
  car.velocityX=speed;
wall.shapeColor="white"
 

  if(isTouching(car,wall)){
  car.velocityX=0;
carDeformation=0.5*weight*speed*speed/22500
//car.shapeColor="blue"
//console.log(carDeformation);

if(carDeformation<100){
car.shapeColor=color(0,255,0);
wall.shapeColor=color(0,255,0);
}
else
if(carDeformation>100 && carDeformation<180){
car.shapeColor=color(230,230,0);
wall.shapeColor=color(230,230,0);

}
else
if(carDeformation>180){
car.shapeColor=color(255,0,0);
wall.shapeColor=color(255,0,0);

}
 
  }
 

 //console.log(car.y)
console.log(car.shapeColor)

  drawSprites();
}
  

function isTouching(object1,object2){
if(  
  object2.x-object1.x<=object1.width/2 + object2.width/2
&&object1.x-object2.x<=object1.width/2 + object2.width/2
&&object1.y-object2.y<=object1.height/2 + object2.height/2
&&object2.y-object1.y<=object1.height/2 + object2.height/2


)
      {return true
        }

else  {return false}

};
function collide(object1,object2){
if( object2.x-object1.x<=object1.width/2+object2.width/2){
  
  object1.velocityX=0
  
}



}