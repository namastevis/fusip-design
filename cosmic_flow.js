// =========================================================================
// THE COSMIC FLOW FIELD (Pure Generative Art in p5.js)
// An advanced, high-performance simulation using math as a paintbrush.
// Click the mouse anywhere to instantly randomize the wind currents!
// =========================================================================

let particles = [];      // Array to hold our glowing ink vectors
let numParticles = 1200; // Total particle count (Lower if school computers lag!)
let noiseScale = 0.005;  // Zoom level of the mathematical noise grid
let noiseStrength = 90;  // How violently the invisible wind currents curve

function setup() {
  // Create a crisp widescreen canvas
  createCanvas(1000, 700);
  
  // Switch to HSB color mode to create seamless, vibrant rainbow shifts
  // Hue (0-360), Saturation (0-100), Brightness (0-100), Opacity (0-100)
  colorMode(HSB, 360, 100, 100, 100);
  
  // Initialize the canvas with a solid matte black background
  background(0);
  
  // Spawn all our particles at completely random spots on the screen
  for (let i = 0; i < numParticles; i++) {
    particles.push(new ArtParticle());
  }
}

function draw() {
  // THE GENERATIVE ART SECRET: We draw a highly transparent black layer 
  // over the screen instead of erasing it completely. This creates 
  // beautiful, slowly fading, glowing light trails behind the vectors!
  background(0, 0, 0, 3); 
  
  // Dynamically slowly shift the global color theme based on frame count
  let baseHue = (frameCount * 0.2) % 360;

  // Loop through and compute the movement paths for every particle
  for (let p of particles) {
    p.followNoise();
    p.update();
    p.checkEdges();
    p.display(baseHue);
  }
}

// Interactive Trigger: Click the mouse to warp the field geometry!
function mousePressed() {
  noiseSeed(random(10000)); // Completely changes the underlying math grid
}

// =========================================================================
// THE ART PARTICLE VECTOR LOGIC
// =========================================================================
class ArtParticle {
  constructor() {
    // Position vector
    this.x = random(width);
    this.y = random(height);
    
    // Store past coordinates to draw perfectly continuous vector lines
    this.prevX = this.x;
    this.prevY = this.y;
    
    // Velocity vectors (speed components)
    this.vx = 0;
    this.vy = 0;
    
    // Give each stroke a unique, organic speed limit and lifespan variance
    this.maxSpeed = random(1.5, 3.5);
    this.hueOffset = random(-30, 30); // Gives color depth to the trails
    this.strokeThickness = random(0.5, 2);
  }
  
  followNoise() {
    // Compute an angle using 2D Perlin Noise based on the particle's X and Y location.
    // Unlike pure random(), noise() provides smooth, natural, continuous vectors.
    let angle = noise(this.x * noiseScale, this.y * noiseScale) * TWO_PI * 2;
    
    // Translate that angle into directional forces (Trigonometry!)
    let forceX = cos(angle) * 0.2;
    let forceY = sin(angle) * 0.2;
    
    // Apply those forces to our speed velocities
    this.vx += forceX;
    this.vy += forceY;
  }
  
  update() {
    // Save our current position as the "previous position" before moving
    this.prevX = this.x;
    this.prevY = this.y;
    
    // Apply a standard speed limit so the simulation doesn't explode
    let speed = sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > this.maxSpeed) {
      this.vx = (this.vx / speed) * this.maxSpeed;
      this.vy = (this.vy / speed) * this.maxSpeed;
    }
    
    // Advance the position coordinate vector
    this.x += this.vx;
    this.y += this.vy;
  }
  
  display(baseHue) {
    // Calculate a dynamic hue variant unique to this single strand
    let finalHue = (baseHue + this.hueOffset + 360) % 360;
    
    // Set up a glowing neon ink style stroke
    stroke(finalHue, 90, 100, 30); // Opacity is kept low (30) so overlapping trails blend
    strokeWeight(this.strokeThickness);
    
    // Draw a continuous fine-art line connecting the past frame to the current frame
    line(this.prevX, this.prevY, this.x, this.y);
  }
  
  checkEdges() {
    // If a particle drifts off the edges of the canvas, wrap it around 
    // to the opposite side and reset its position logs cleanly.
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
    
    // Prevent the line coordinates from snapping awkwardly across the screen
    if (abs(this.x - this.prevX) > width/2 || abs(this.y - this.prevY) > height/2) {
      this.prevX = this.x;
      this.prevY = this.y;
    }
  }
}
