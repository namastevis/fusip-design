// =========================================================================
// THE MOUSE-SWARM PARTICLE SYSTEM
// Fullscreen glowing effect.
// =========================================================================

let particles = []; // The array to store all our moving dots

function setup() {
  // Create a canvas that fills the whole browser window
  createCanvas(windowWidth, windowHeight);
  
  // Set the color mode to HSB (Hue, Saturation, Brightness) 
  // for easy color shifting (0-360 degrees, like a rainbow)
  colorMode(HSB, 360, 100, 100, 100);
  
  // Create a lot of particles! Let's start with 500.
  for (let i = 0; i < 500; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  // Transparent background for a trailing effect. The '10' is the alpha/opacity (0-100).
  background(220, 90, 15, 10); 
  
  // Loop through all particles and update/display them
  for (let p of particles) {
    p.update();
    p.display();
  }
}

// Automatically resize the canvas if the browser window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// =========================================================================
// THE PARTICLE CLASS (Our blueprint for each dot)
// =========================================================================
class Particle {
  constructor() {
    this.x = random(width); // Start at a random X
    this.y = random(height); // Start at a random Y
    
    // Velocity (speed and direction)
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    
    // Random size between 2 and 8 pixels
    this.size = random(2, 8);
    
    // Random initial color from the rainbow
    this.h = random(360);
  }
  
  update() {
    // 1. PHYSIC LOGIC: CHASE THE MOUSE!
    // A simplified spring-like pull towards the mouse position
    let accelX = (mouseX - this.x) * 0.001;
    let accelY = (mouseY - this.y) * 0.001;
    
    // Apply acceleration to velocity
    this.vx += accelX;
    this.vy += accelY;
    
    // Limit maximum speed to keep it under control
    let maxSpeed = 8;
    let speed = sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > maxSpeed) {
      this.vx = (this.vx / speed) * maxSpeed;
      this.vy = (this.vy / speed) * maxSpeed;
    }
    
    // 2. ADD MOVEMENT: Update position based on velocity
    this.x += this.vx;
    this.y += this.vy;
    
    // 3. COLOR LOGIC: Gently shift hue over time for a shimmering effect
    this.h = (this.h + 0.5) % 360; 
  }
  
  display() {
    // 4. DRAWING LOGIC: Make it look like it glows
    // Draw an ellipse with a dynamic color
    noStroke();
    
    // Bright color: Hue (cycling), Max Saturation (100), Max Brightness (100), Some opacity (80)
    fill(this.h, 100, 100, 80);
    ellipse(this.x, this.y, this.size, this.size);
    
    // Optional second ellipse for a stronger 'core' glow effect (experiment!)
    fill(this.h, 100, 100, 30);
    ellipse(this.x, this.y, this.size * 2, this.size * 2);
  }
}
