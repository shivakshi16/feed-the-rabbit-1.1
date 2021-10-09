var gardenImg,rabbitImg;
var apple,appleImg
var leaforange,leaforangeimg



function preload(){
gardenImg = loadImage("garden.png");
rabbitImg = loadImage("rabbit.png");
appleImg=loadImage("apple.png")
leaforangeimg=loadImage("orangeLeaf.png")
}

function setup(){
  
createCanvas(400,400);


garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage("moving",rabbitImg);

}


function draw() {
background(0);
rabbit.x=World.mouseX
edges= createEdgeSprites();
rabbit.collide(edges);
drawSprites();
var select_sprites=Math.round(random(1,2))
if(frameCount % 80 == 0){
  if(select_sprites==1){
    createApples() 
  }
  else{
    createLeaves()
  }
}


}
function createApples() {
apple=createSprite(random(50,350,),40,10,10)
apple.addImage(appleImg)
apple.scale=0.07
apple.velocityY=2
apple.lifetime=200
}



function createLeaves() {
leaforange=createSprite(random(50,350),40,10,10)
leaforange.addImage(leaforangeimg)
leaforange.scale=0.06
leaforange.velocityY=2
leaforange.lifetime=200


}





