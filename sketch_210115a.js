// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(253, 160, 255);
  c2 = color(227, 112, 133);
  c3 = color(255,198,106);
}


function draw() {
  setGradient( 0, 0, width *  (1/3), height * (1/3), c1, c2, c3);
  setGradient( width *  (1/3), 0, width *  (1/3), height * (1/3), c3, c1, c2);
  setGradient( width *  ((1/3)*2), 0, width *  (1/3), height * (1/3), c2, c3, c1);
  
  translate( 0, height * (1/3));
  setGradient( 0, 0, width *  (1/3), height * (1/3), c1, c3, c2);
  setGradient( width *  (1/3), 0, width *  (1/3), height * (1/3), c3, c2, c1);
  setGradient( width *  ((1/3)*2), 0, width *  (1/3), height * (1/3), c2, c1, c3);
  
  translate( 0, height * (1/3));
  setGradient( 0, 0, width *  (1/3), height * (1/3), c2, c3, c1);
  setGradient( width *  (1/3), 0, width *  (1/3), height * (1/3), c1, c2, c3);
  setGradient( width *  ((1/3)*2), 0, width *  (1/3), height * (1/3), c3, c1, c2);
  
  save("20210115.png");
  noLoop();
}

function setGradient(x, y, w, h, c1, c2, c3) {
  noFill();
  
  //Square
  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
    let c = lerpColor(c1, c2, inter);
    
    let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
    let p = lerpColor(c2, c3, inter02);
    
    stroke(c);
    line(x, i, x + w, i);
    
     if ( i <= (y + h) - ((h/2))){
      stroke(c);
      line(x, i, x + w, i);
    }else{
      stroke(p);
      line(x, i, x + w, i);
    }
     
  }
  
  //Circle
  let u = 100;
  d = w * 0.8;
  push();
  translate( d*0.6, d*0.6);
  for (let i=0; i<u; i++) {
   let col = lerpColor(c1, c2, (i/u)*2 );
   let col02 = lerpColor(c2, c3, ((i - (u/2))/(u/2)));
   let a = lerp(PI, 0, i/u);
   
   
   if ( i <= u/2){
      fill(col);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }else{
      fill(col02);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }   

   }
   pop();
}
