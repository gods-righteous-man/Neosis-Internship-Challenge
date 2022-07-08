class Sketch {
	constructor(angle, zoom, txt, dict, faces, vertices, facelist) {
		this.angle = angle;
		this.zoom = zoom;
		this.txt, txt;
		this.faces = faces;
		this.vertices = vertices;
		this.dict = dict;
		this.facelist = facelist;
	}

	drawLine(x1, y1, z1, x2,y2, z2){
		beginShape();
		vertex(x1,y1,z1);
		vertex(x2,y2,z2);  
		endShape();
	  }
}

let sketch;

function preload(){
	sketch = new Sketch(angle=0, zoom=1, txt=[], dict={}, faces=0, vertices=0, facelist=0);
	sketch.txt = loadStrings('object.txt');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(18);
	sketch.vertices = int(sketch.txt[0][0]);
	sketch.faces = int(sketch.txt[0][2]);
	for (let i=1; i<=sketch.vertices; i++){
		sketch.dict[int(sketch.txt[i][0])] = sketch.txt[i].slice(2);
	}
	// put setup code here
}

function draw() {
	clear();
	if (mouseIsPressed ){
		if (mouseX){
			rotateY(mouseX/100);
		}
		if (mouseY){
			rotateX(mouseY/100);
		}
		
	}

	scale(sketch.zoom);

	// fill("red");

	noFill();
	push()
	colorMode(HSB);
	strokeWeight(4);
	stroke(255, 204, 100);
	
	
	for (let i=7; i<sketch.faces+sketch.vertices +1; i++){
		sketch.facelist = int(sketch.txt[i].split(','));
		console.log(sketch.facelist);
		let temp;
		
		
		fill(0,0,255);
		temp = int(sketch.dict[sketch.facelist[0]].split(','));
		temp = temp.concat(int(sketch.dict[sketch.facelist[1]].split(',')));
		console.log(temp);
		sketch.drawLine(temp[0],temp[1], temp[2], temp[3],temp[4],temp[5]);

		temp = int(sketch.dict[sketch.facelist[1]].split(','));
		temp = temp.concat(int(sketch.dict[sketch.facelist[2]].split(',')));
		console.log(temp);
		sketch.drawLine(temp[0],temp[1], temp[2], temp[3],temp[4],temp[5]);

		temp = int(sketch.dict[sketch.facelist[0]].split(','));
		temp = temp.concat(int(sketch.dict[sketch.facelist[2]].split(',')));
		console.log(temp);
		sketch.drawLine(temp[0],temp[1], temp[2], temp[3],temp[4],temp[5]);

	}
	
	pop()
	let c = color(0, 0, 255);

	for (let i = 1; i<=sketch.vertices; i++){
		push();
		v = int(sketch.dict[i].split(','));
		console.log(v);
		translate(v[0], v[1], v[2])
		fill(c);
		noStroke();
		sphere(0.08);
		pop();
	}
	
	sketch.zoom = 100;
	sketch.angle += 0.05;
}











