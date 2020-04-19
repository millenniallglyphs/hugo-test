console.log("hello");

let font, points, pointsInPaths, pointsInGlyphs;
let txt = "it ain't ok";
let imp;
var vehicles = [];

function preload() {
  font = loadFont('../fonts/HelveticaNowDisplayBold.otf');
  imp = loadImage('../disease/mos-2.png');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('Diseasecanvas');
  stroke(0);
  strokeWeight(0.5);

  let fSize = 300;


  // get points in glyphs
  pointsInGlyphs = font.textToPoints(txt, 0, 0, fSize);
  for (let i = 0; i < pointsInGlyphs.length; i++) {
        let p = pointsInGlyphs[i];
        var vehicle = new Vehicle(p.x+200, p.y+400, imp);
        vehicles.push(vehicle);
    }

  //bounding of the string
}

function draw() {
  //translate( 0 , height/2);// move to far corner
  background(0);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

}
