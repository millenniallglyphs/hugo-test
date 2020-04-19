const s = ( sketch ) => {

  var Engine = Matter.Engine,
        //Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

  var engine;
  var world;
  var water;

  sketch.preload = () => {
    //bg = sketch.loadImage('../media/sketches/MAMA-Type.png');
    i = sketch.loadImage("/flood/MAMA-Type-01.png");
    m = sketch.loadImage("/flood/MAMA-Type-08.png");
  }


  var fric = {
    friction: 0.8,
    restitution: 0
    //isStatic: true
  };


  sketch.setup = () => {
    sketch.createCanvas(1600, 800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    //letter = Bodies.rectangle(500, 400, 100, 100, fric);
    letterb = Bodies.rectangle(275, 310, 50, 250, fric);
    letterm = Bodies.rectangle(383, 620, 268, 200, fric);
    water = Bodies.rectangle(1600, 800, 1600, 800, {isStatic: true});
    World.add(world, [
      letterb,
      letterm,
      water
    ]);
    sketch.background(0);
    //background(bg);
    engine.world.gravity.y = 0.0005;



  }

  sketch.draw = () => {
    sketch.background(0);
    //background(bg);


    var py = 1200 - (10 * (engine.timing.timestamp * 0.005));
    if (py > 800) {

    } else {
      py = 800;
    }



  function setCor(name, xpos, ypos) {
    Matter.Body.setVelocity(name, { x: 0, y: 0});
    Matter.Body.setPosition(name, { x: xpos, y: ypos });
    Matter.Body.setAngle(name, 0);
  };



    Matter.Body.setVelocity(water, { x: 0, y: water.position.y - py });
    Matter.Body.setPosition(water, { x: 800, y: py });


    sketch.noStroke();
    sketch.fill(0);
    sketch.rectMode(sketch.CENTER);

    sketch.push();
    sketch.translate(letterb.position.x, letterb.position.y);
    sketch.rotate(letterb.angle);
    sketch.fill(0);
    sketch.imageMode(sketch.CENTER);
    sketch.image(i, 0, 0, 50, 250);
    //rect(0, 0, 50, 250);
    sketch.pop();

    sketch.push();
    sketch.translate(letterm.position.x, letterm.position.y);
    sketch.rotate(letterm.angle);
    sketch.fill(0);
    sketch.imageMode(sketch.CENTER);
    sketch.image(m, 0, 0, 268, 200);
    sketch.pop();
  /*
    push();
    rectMode(CENTER);
    translate(water.position.x, water.position.y)
    fill(150);
    rect(0, 0, width, 1050);
    pop();
    */
    //rect(water.position.x, water.position.y);
    sketch.push();
    sketch.fill(255);
    sketch.rect(0, py, 1600, 800)
    sketch.pop();

  }
};

let myp3 = new p5(s, 'Floodcanvas');
