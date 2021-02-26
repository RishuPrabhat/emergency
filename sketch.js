


function preload(){

  eQ = loadImage("images/EarthQuake.jpg")
  fire = loadImage("images/fire.png")
  hospital = loadImage("images/hospital.jpg")
  police = loadImage("images/police.png")
  womenP = loadImage("images/womenProtection.png")
}

	


function setup() {
	createCanvas(displayWidth,displayHeight);
  //mainPage = new MainPage()

  earthQ= createSprite(displayWidth/2,displayHeight/2-40)
  earthQ.addImage("Eq",eQ)

  police1 = createSprite(displayWidth/2-20,displayHeight/2-40)
  police1.addImage("P",police)

  hospital = createSprite(displayWidth/2-10,displayHeight/2-20)
  hospital.addImage("H",hospital)

  fire1 = createSprite(displayWidth/2-30,displayHeight/2-10)
  fire1.addImage("F",fire)

  womenpr = createSprite(displayWidth/2-50,displayHeight/2-10)
  womenpr.addImage("W",womenP)

}
function draw() { 
background("magenta");
  

drawSprites();
}