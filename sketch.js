const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine,world;
var plinkos = [];

var divisions = [];
var divisionHeight=300;
var particle;
var score =0;
var turn=0;
gameState="Play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);
  yellow = new Line(400,450,800,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }

    

    
}
 


function draw() {
  background("black");
  mousePressed();
  textSize(20)
 text("Score : "+score,20,30);
 textSize(40)
 text("100",7,600);
 text("100",87,600);
 text("200",167,600);
 text("200",247,600);
 text("500",327,600);
 text("500",407,600);
 text("200",487,600);
 text("200",567,600);
 text("100",647,600);
 text("100",727,600);

  Engine.update(engine);
  if(particle!=null){
    particle.display();

    if(particle.body.position.y>550){

    if(particle.x>320 && particle.x<400){
      score=score+500;
      particle=null;
      if(turn>=5)gameState="End";
    }
   }
  }
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   ground.display();
   yellow.display();
}
function mousePressed(){
  if(gameState==="Play"){
    turn++
    particle=new Particle(mouseX,10,10,10);
  }
}