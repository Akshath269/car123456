var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  //create sprite for car on left of canvas , give color white and velocit in negetive
   car=createSprite(50,200,50,50);
   car.shapeColor="white";
   car.velocityX=-5;
  //assign random value to speed and weight (refer pproject document for value of random)
   speed=random(55,90);
   weight=random(400,1500);

  //Assign the velocityX property of the car sprite to the speed variable.
  car.velocityX=speed;

  //create sprite for wall on right of the canvas, give color grey
wall=createSprite(1500,200,60,height/2);
wall.shapeColor="grey";
}

function draw() {
  background("red");  


  //write if condition for collision detection

  if( wall.x-car.x <(car.width+wall.width) /2  )
  {
     car.velocityX=0;
     var deformation=0.5 * weight * speed* speed/22509;
     if(deformation>180)
     {
       car.shapeColor=(255,0,0);
     }
if(deformation<180 && deformation>100)
{
car.shapeColor="yellow";
}

if(deformation<100){
  car.shapeColor=(0,255,0)
}
    //make the car velocity as zero
  

    //calculate deformation , forlmula is fiven in project description step 9


    //if condition for changing color of the car based on value of deformation. (step 10)

    


  }


  drawSprites();
}