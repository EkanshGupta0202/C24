// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine, world;
var ground;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,580,800,05);
    tanker = new Tanker(105, 525, 90, 20);    
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    background("black");
    Engine.update(engine);
    ground.display();
    tanker.display();
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}