let angle = 0;
let zoom = 1;
var txt;
var faces;
var vertices;
var dict = {};
var facelist;

function preload(){
	txt = loadStrings('object.txt');
}

function drawLine(x1, y1, z1, x2,y2, z2){
	beginShape();
	vertex(x1,y1,z1);
	vertex(x2,y2,z2);  
	endShape();
  }


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(18);
	console.log(txt);
	console.log(txt[0]);
	vertices = int(txt[0][0]);
	faces = int(txt[0][2]);
	console.log(faces, vertices);
	for (let i=1; i<=vertices; i++){
		dict[int(txt[i][0])] = txt[i].slice(2);
	}
	// console.log(dict[5]);
	// for (let i=7; i<faces+vertices +1; i++){
	// 	console.log(txt[i]);

	// }
	
	
	
	// put setup code here
}



function draw() {
	clear();
	// put drawing code here
	// background(200, 180, 20);
	
	//translate(mouseX-width/2, mouseY-width/2);
	//rotateZ(mouseX/100);
	//rotateX(mouseY/100);
	//rotateY(mouseX/100);
	
	
	if (mouseIsPressed ){
		if (mouseX){
			rotateY(mouseX/100);
		}
		if (mouseY){
			rotateX(mouseY/100);
		}
		
	}

	scale(zoom);
	
	
	
	// vertex(1,0,0);
	// vertex(0,-1,0);
	// vertex(0,0,1);
	// vertex(-2,0,0);
	// vertex(0,2,0);
	// vertex(0,0,-2);

	fill("red");

	noFill();
	push()
	colorMode(HSB);
	strokeWeight(4);
	stroke(255, 204, 100);
	
	
	for (let i=7; i<faces+vertices +1; i++){
		facelist = int(txt[i].split(','));
		console.log(facelist);
		let temp;
		//console.log(int(dict[facelist[0]].split(',')),int(dict[facelist[1]].split(',')));

		temp = int(dict[facelist[0]].split(','));
		temp = temp.concat(int(dict[facelist[1]].split(',')));
		console.log(temp);
		drawLine(temp[0],temp[1], temp[2], temp[3],temp[4],temp[5]);

		temp = int(dict[facelist[1]].split(','));
		temp = temp.concat(int(dict[facelist[2]].split(',')));
		console.log(temp);
		drawLine(temp[0],temp[1], temp[2], temp[3],temp[4],temp[5]);

		temp = int(dict[facelist[0]].split(','));
		temp = temp.concat(int(dict[facelist[2]].split(',')));
		console.log(temp);
		drawLine(temp[0],temp[1], temp[2], temp[3],temp[4],temp[5]);

	}
	// drawLine(1,0,0,0,-1,0);
	// drawLine(1,0,0,0,0,1);
	// drawLine(0,-1,0,0,0,1);

	// drawLine(0,-1,0,0,0,-2);
	// drawLine(1,0,0,0,0,-2)

	// drawLine(1,0,0,0,2,0);
	// drawLine(0,0,1,0,2,0);
	

	// drawLine(1,0,0,0,0,-2);
	// drawLine(0,2,0,0,0,-2);
	

	// //drawLine(0,-1,0,0,0,1);
	// drawLine(0,0,1,-2,0,0);
	// drawLine(0,-1,0,-2,0,0);

	// drawLine(-2,0,0,0,0,-2);
	// drawLine(-2,0,0,0,2,0);
	// drawLine(0,2,0,0,0,-2);
	pop()
	let c = color(0, 0, 255);
	// push();

	for (let i = 1; i<=vertices; i++){
		push();
		v = int(dict[i].split(','));
		console.log(v);
		translate(v[0], v[1], v[2])
		fill(c);
		noStroke();
		sphere(0.08);
		pop();
	}
	
	//translate(1,0,0);
	// fill(c);
	// noStroke();
	// sphere(0.08);
	// pop();
	// push();
	// translate(0,-1,0);
	// fill(c);
	// noStroke();
	// sphere(0.08);
	// pop();
	// push();
	// translate(0,0,1);
	// fill(c);
	// noStroke();
	// sphere(0.08);
	// pop();
	// push();
	// translate(-2,0,0);
	// fill(c);
	// noStroke();
	// sphere(0.08);
	// pop();
	// push();
	// translate(0,2,0);
	// fill(c);
	// noStroke();
	// sphere(0.08);
	// pop();
	// push();
	// translate(0,0,-2);
	// fill(c);
	// noStroke();
	// sphere(0.08);
	// pop();
	

	
	


	

	zoom = 100;


	angle += 0.05;
}
