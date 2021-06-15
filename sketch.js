var garden, cat, mouse, catImg1, mouseImg1,catImg2, mouseImg2, catImg3, mouseImg3;
function preload() {
    //load the images here
    garden = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse4.png");

    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");

    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,680,50,50);
    cat.addAnimation("catsitting",catImg1);
    cat.scale = 0.2;

    cat.addAnimation("catWalking",catImg2);

    cat.addAnimation("catColliding",catImg3)

    mouse = createSprite(200,670,50,50);
    mouse.addAnimation("mousestanding",mouseImg1);
    mouse.scale = 0.2;

    mouse.addAnimation("mouseTeasing",mouseImg2);

    mouse.addAnimation("mouseColliding",mouseImg3);

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < mouse.width/2 + cat.width/2){
       mouse.changeAnimation("mouseColliding");
       cat.changeAnimation("catColliding");
       cat.x = 400;
       cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      mouse.changeAnimation("mouseTeasing");
      cat.changeAnimation("catWalking");
      cat.velocityX= -4;
  }


}
