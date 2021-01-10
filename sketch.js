
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var player,playerImage
var pickaxe,pickaxeImage
var stone1,stone,stoneGroup,stoneImage
var gold,goldImage
var Chain
var stoneArray = [];
var i
var d
var index

function preload()
{
	playerImage=loadImage("MyGame/Miner.png")
	stoneImage=loadImage("MyGame/Stone.png")
	goldImage=loadImage("MyGame/GoldBlock.png")
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	player=createSprite(500,100,20,20);
	player.addImage(playerImage)
	player.scale=0.2
	pickaxe = new Pickaxe(500,150)
	gold=createSprite(500,900,50,50)
	gold.addImage(goldImage)
	gold.scale=0.2
	//stoneGroup = new Group();

	for (i = 0; i < 1200; i+=50) {
		stone1=createSprite(i,200,50,50)
		stone1.addImage(stoneImage)
		stone1.scale=0.15
		stoneArray.push(stone1)
		//stoneGroup.add(stone1);
	}
	console.log(stoneArray)
	for (c = 0; c < 1200; c+=50) {
		stone=createSprite(c,300,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}

	for (x = 0; x < 1200; x+=50) {
		stone=createSprite(x,350,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	} 
	for (y = 0; y < 1200; y+=50) {
		stone=createSprite(y,450,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}
	for (a = 0; a < 1200; a+=50) {
		stone=createSprite(a,500,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	} 
	for (z = 0; z < 1200; z+=50) {
		stone=createSprite(z,550,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}
	for (b = 0; b < 1200; b+=50) {
		stone=createSprite(b,650,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}
Chain = new SlingShot(pickaxe.body,{x:500,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(RIGHT_ARROW)){
	player.y=player.y+10
  }
  if(keyDown(LEFT_ARROW)){
	player.y=player.y-10
  }
  for(d=0;d < stoneArray.length;d++){
 if(stoneArray[d].isTouching(player)){
	 //stoneGroup.destroyEach();
	 stoneArray[d].destroy();
}
}

stone.depth=player.depth
  pickaxe.display();
  Chain.display();
  drawSprites();

}
function mouseDragged(){
        Matter.Body.setPosition(pickaxe.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Chain.fly();
}



