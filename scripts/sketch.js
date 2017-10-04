var cir = {
  posX:100, 
  posY:2,
  Rcolor:200,
  Gcolor:250,
  Bcolor:200
};

function setup() {
	createCanvas(400,400);
}

function draw() {
	background(20,30,50);
	
	ellipseMode(CENTER);
	fill(cir.Rcolor,cir.Gcolor,cir.Bcolor);
	ellipse(cir.posX,cir.posY,60);
	fill(cir.Rcolor-12,cir.Gcolor-12,cir.Bcolor-12);
	ellipse(cir.posX,cir.posY,55);
	if(mouseIsPressed){
		cir.posX =mouseX;
		cir.posY = mouseY;
	}
  //if (mouseIsPressed)
  // paintEllipse();
  //triangle();
  //arc();
  //point();
 }
