// =========================================================================
// THE SIMPLE BOUNCY BALL
// Just 4 simple variables acting exactly like real-world physics.
// =========================================================================

// 1. POSITION variables (Where is the ball right now?)
let ballX = 300;
let ballY = 100;

// 2. SPEED variables (How many pixels does it move every single frame?)
let speedX = 5;
let speedY = 2;

// 3. PHYSICAL FORCES (The rules of our world)
let gravity = 0.5;   // Pulls the ball downward
let bounciness = -0.8; // Reverses direction and absorbs 20% of the energy

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // Wipe the screen with a dark background to animate smoothly
  background(20, 30, 50);
  
  // -----------------------------------------------------------------------
  // THE PHYSICS LOGIC (The Core Concept)
  // -----------------------------------------------------------------------
  
  // Gravity constantly increases our downward speed
  speedY = speedY + gravity;
  
  // Update the ball's position by adding the speed to it
  ballX = ballX + speedX;
  ballY = ballY + speedY;
  
  // -----------------------------------------------------------------------
  // WALL COLLISIONS (The Boundaries)
  // -----------------------------------------------------------------------
  
  // Hitting the FLOOR? Flip the vertical speed and snap it to the bottom
  if (ballY > 580) {
    ballY = 580;
    speedY = speedY * bounciness;
  }
  
  // Hitting the CEILING? Flip the vertical speed and snap it to the top
  if (ballY < 20) {
    ballY = 20;
    speedY = speedY * bounciness;
  }
  
  // Hitting the RIGHT wall? Flip horizontal speed
  if (ballX > 580) {
    ballX = 580;
    speedX = speedX * bounciness;
  }
  
  // Hitting the LEFT wall? Flip horizontal speed
  if (ballX < 20) {
    ballX = 20;
    speedX = speedX * bounciness;
  }
  
  // -----------------------------------------------------------------------
  // DRAW THE BALL & INTERACTION
  // -----------------------------------------------------------------------
  
  // If they click the mouse, they can "teleport" the ball to catch it!
  if (mouseIsPressed) {
    ballX = mouseX;
    ballY = mouseY;
    speedX = random(-5, 5); // Give it a random horizontal kick when released
    speedY = 0;             // Reset falling speed
  }
  
  // Draw our bouncy ball (Diameter is 40 pixels, so its edges hit at 20 and 580)
  noStroke();
  fill(0, 255, 200); // Bright neon cyan
  ellipse(ballX, ballY, 40, 40);
}
