var mi_circulo = {
  posX:100, 
  posY:2,
  Rcolor:200,
  Gcolor:250,
  Bcolor:200
};

function setup() {
	createCanvas(800,600);
}

function draw() {
	background(20,30,50);
  ellipseMode(CENTER);

  fill(Rcolor,Gcolor,Bcolor);
  circulo(posX,posY,60);

  //if (mouseIsPressed)
  // paintEllipse();
  
  //triangle();
  //arc();
  //point();
 }

 function paintEllipse(){
 	bola = new ellipse(random(0,800), random(0,600), 50, 50);
 }