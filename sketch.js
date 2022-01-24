var box;

function setup() {
  createCanvas(800,400);
  box = createSprite(200,200,100,100);
  box.shapeColor = "lightblue";

  

}

function draw() {
  background(black); 
  
  drawSprites();
}
