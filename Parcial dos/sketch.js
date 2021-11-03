var x = [];
var y = [];

var x0;
var y0;

var x1;
var y1;

var steps;

var rolita;

var imagenChica;
var imagenBoy;
var imagenAmbos;
var imagenTaco;


var analisis;

function preload(){
  rolita = loadSound("kyy.mp3");
}

function setup() {
  createCanvas(1250, 700);
  //background(255, 252, 195);
  
  imagenChica=loadImage("paneluno.png");
  imagenBoy=loadImage("paneldos.png");
  imagenAmbos=loadImage("paneltres.png");
  imagenTaco = loadImage("foto.png");
  

  analisis = new p5.Amplitude();
  analisis.setInput(rolita);
  
  x0 = 90;
  y0 = 30;
  
   
  x1 = 90;
  y1 = 90;
  
  steps = width/4;
  
  for(var i = steps/2; i<width; i+=steps){
      x = append(x,i);
      y = append(y,(650));
  }
  
}

function draw(){
  background(255, 252, 195);
    fill(237, 192, 246 );
  rect(10,100, 300, 500);
  rect(320,100, 300, 500);
  rect(630,100, 300, 500);
  rect(940,100, 300, 500);
 
  var amplitud = analisis.getLevel();{   
    fill(126, 223, 219,amplitud*5000);
    noStroke(amplitud*2);
    ellipse(200,500,amplitud*500); 
  
    fill(178, 185, 236 ,amplitud*5000);
    noStroke(amplitud*2);
    ellipse(100,200,amplitud*500); 
  
    fill(62, 82, 227,amplitud*5000);
    noStroke(amplitud*2);
    ellipse(100,200,amplitud*300); 
  
    fill(157, 89, 255  ,amplitud*200);
    noStroke(amplitud*2);
    ellipse(350,230,amplitud*500); 
  
    fill(173, 149, 208 ,amplitud*100);
    noStroke(amplitud*2);
    ellipse(350,230,amplitud*300); 
 
    fill(255, 200, 89  ,amplitud*200);
    noStroke(amplitud*2);
    rect(450,30,amplitud*500); 
  
    fill(245, 255, 89,amplitud*800);
    noStroke(amplitud*2);
    rect(450,400 ,amplitud*300);
      
    fill(144, 238, 255 ,amplitud*500);
    noStroke(amplitud*2);
    rect(650,360,amplitud*400); 
  
    fill(255, 94, 89,amplitud*500);
    noStroke(amplitud*2);
    rect(750,150 ,amplitud*600);
    
    fill(255, 180, 144 ,amplitud*1000);
    noStroke(amplitud*2);
    rect(940,100 ,amplitud*600);
      
    fill(16, 209, 212  ,amplitud*1000);
    noStroke(amplitud*2);
    rect(940,350 ,amplitud*600);
    
    }
  
  var d0 = dist(x0,y0,mouseX,mouseY);{
  if(d0 <= 25){
  
    if(mouseIsPressed){
      if(x0[i] ==x0[0]){
        rolita.play(); 
      }
    }
  }
      
   if(d0 <= 25){
    fill(255,0,0);
    }else{
      fill(0)
    }

    ellipse(x0,y0,100,25); 
  }
  
    for(var i = 0; i<x.length; i++){
      var d = dist(x[i],y[i],mouseX,mouseY);
      if(d <= 25){   
         
       if(mouseIsPressed){
      if(x[i] == x[0]){
       image(imagenChica,10,100,300,500);
          }
      
      if(x[i] == x[1]){
          image(imagenBoy,320,100, 300, 500);  
      }
      
      if(x[i] == x[2]){
          image(imagenAmbos,630,100, 300, 500);  
      }
      
      if(x[i] == x[3]){
          image(imagenTaco,940,100, 300, 500);  
      }
     }
        

    }  
    
    if(d <= 25){
       fill(255,0,0);
    }else{
      fill(0)
    }  
    ellipse(x[i],y[i],25,25);
      
 }
    
 
}