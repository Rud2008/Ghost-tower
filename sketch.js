var t,ti;
var d,di,dg;
var c,ci,cg;
var g,gi;
var ib,ibg;
var gameState = "play";
var spookysound
function preload(){
  ti = loadImage("tower.png");
  di = loadImage("door.png");
  ci = loadImage("climber.png");
  gi = loadImage("ghost-standing.png")
  spookysound = loadSound("spooky.wav")
}
function setup(){
  createCanvas(600,600)
 
  t = createSprite(300,300)
  t.addImage(ti)

t.velocityY = 1
  
  g = createSprite(200,200,50,50);
  g.addImage(gi);
  g.scale = 0.3
  dg = new Group();
  cg = new Group();
  ibg = new Group();
}
function draw(){
  background(0)
  if(gameState === "play"){
    

  if(t.y>400){
    t.y = 300
  }
  
  if(keyDown("left_arrow")){
    g.x = g.x-3
  }
  
  if(keyDown("right_arrow")){
    g.x= g.x+3
  }
  
  if(keyDown("space")){
    g.velocityY = -5
  }
  g.velocityY = g.velocityY+0.8
  
  if(cg.isTouching(g)){
    g.velocityY = 0
  }
  
    if(ibg.isTouching(g)){
      g.destroy()
      gameState = "end"
    }
  door();
  drawSprites();
  }
  if(gameState === "end"){
    stroke("yellow")
    fill("yellow")
    textSize(30)
    text("Game Over",230,250)
    // spookysound.play();
  }
}
function door(){
  if(frameCount%200 ===0){
    d = createSprite(200,-50)
    d.addImage(di);
    d.x = Math.round(random(120,400))
      d.velocityY = 1
      d.lifetime = 800
    dg.add(d)
    c = createSprite(200,10)
    c.addImage(ci);
    c.x= d.x
    c.velocityY = 1
    c.lifetime = 800
    cg.add(c)
    g.depth = d.depth
    g.depth+=1
    ib = createSprite(200,15)
    ib.width = c.width
    ib.height = 2
    ib.x = d.x
    ib.velocityY = 1
    ib.debug = true
    ibg.add(ib)
  }
}