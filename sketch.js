function setup() {
	createCanvas(800,600);
}

function draw() {
	background(20,30,50);
	ellipseMode(CENTER);
  fill(255,56,45);
  stroke(0,255,255);
  ellipse(40, 200, 80, 80);
  fill(60,255,45,150);
  stroke(255,255,0);
  rect(0,200,80,80);

  if (mouseIsPressed)
    paintEllipse();
  
  //triangle();
  //arc();
  //point();
 }

 function paintEllipse(){
 	bola = new ellipse(random(0,800), random(0,600), 50, 50);
 }