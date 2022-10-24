const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var pizo;
var korda;
var futcha;
var lassos;
var backgroundI;
var melonSugar;
var sansao;
var pomposo;
var enter;
var backyardigans;
var cut;
var sadness;
var happiness;
var ventinho;
var pisca;
var buchinho;
var tristeza;

function preload(){
  backgroundI = loadImage("toyStory.jpg");
  melonSugar = loadImage("melon.png");
  sansao = loadImage("Rabbit-01.png");
  pisca = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  buchinho = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  tristeza = loadAnimation ("sad_1.png","sad_2.png","sad_3.png");
  backyardigans = loadSound("sound1.mp3");
  cut = loadSound("rope_cut.mp3");
  sadness = loadSound("sad.wav");
  happiness = loadSound("eating_sound.mp3");
  ventinho = loadSound("air.wav");
  buchinho.looping = false;
  tristeza.looping = false;
}

function setup()

  
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);

  pisca.frameDelay = 15;
  buchinho.frameDelay = 15;
  tristeza.frameDelay = 15;

  pizo = new Chao(200, 690, 600, 20);
  korda = new Rope (6, {x:245, y:40});
  futcha = Bodies.circle (300, 300, 15);
  Matter.Composite.add(korda.body,futcha);
  lassos = new Vinculo (korda,futcha); 
  pomposo = createSprite (250,530,100,100);
  pomposo.addImage (sansao);
  pomposo.scale = 0.4
  pomposo.addAnimation("piscando", pisca);
  pomposo.addAnimation("comendo", buchinho);
  pomposo.addAnimation("bolado",tristeza);
  pomposo.changeAnimation("piscando");
  enter = createImg ("cut_btn.png");
  enter.position(220,30);
  enter.size(50,50);
  enter.mouseClicked(deixar);
}

function draw() 
{
  background(51);
  image(backgroundI, width/2, height/2, 500, 700);
  Engine.update(engine);
  pizo.chou();
  korda.chou();
  if(futcha!==null){
  image(melonSugar,futcha.position.x, futcha.position.y,63,63);

  }
  drawSprites();
  if(colissao(futcha,pomposo)===true){
  pomposo.changeAnimation("comendo")
  }
  if(futcha !== null && futcha.position.y >= 650){
    pomposo.changeAnimation("bolado")
    futcha = null
  }

}

function deixar(){
korda.break();
lassos.separar();
lassos=null;


}

function colissao(corpo,sprite){
if(corpo!==null){
var distanssia = dist(corpo.position.x,corpo.position.y,sprite.position.x, sprite.position.y) 
if( distanssia <=80)
{
World.remove (engine.world,futcha);
futcha = null
return true
}
else {
return false
}
}
}
