// =========================================================================
// THE MASTER DIGITAL SILK PAINTBRUSH (All 3 Size Hacks Included!)
// Move your mouse slowly to paint smooth silk ribbons.
// Press any keyboard key to completely clear your canvas and start over!
// =========================================================================

function setup() {
  // Create a nice big drawing board
  createCanvas(800, 600);
  
  // Paint the canvas pitch black ONCE at the very beginning
  background(10, 15, 25);
}

function draw() {
  // -----------------------------------------------------------------------
  // CHOOSE A BRUSH SIZE HACK (Uncomment ONLY ONE option below to test!)
  // -----------------------------------------------------------------------
  
  // DEFAULT OPTION: Fixed, predictable size
  let brushSize = 40;
  
  // --- HACK 1: THE ORGANIC SPEED BRUSH ---
  // (Reacts to how fast you flick your mouse. Thin when slow, thick when fast!)
  // let mouseSpeed = abs(mouseX - pmouseX); // Speed = distance since last frame
  // brushSize = 10 + mouseSpeed * 2;   // Minimum size of 10 + speed modifier
  
  // --- HACK 2: THE BREATHING WAVE BRUSH ---
  // (Uses math waves to smoothly shrink and grow from 10 to 60 pixels automatically)
  // brushSize = 35 + sin(frameCount * 0.05) * 25;
  
  // --- HACK 3: THE CHAOTIC SPRAY BRUSH ---
  // (Picks a totally chaotic, completely unpredictable size every millisecond)
  // brushSize = random(5, 80);

  // -----------------------------------------------------------------------
  // CHOOSE A COLOR THAT CHANGES WITH THE MOUSE
  // -----------------------------------------------------------------------
  // As you move right (mouseX grows), the red channel increases.
  // As you move down (mouseY grows), the blue channel increases.
  let brushRed = mouseX / 3; 
  let brushBlue = mouseY / 2;
  
  // fill(Red, Green, Blue, Opacity)
  // Keeping opacity ultra-low (15) means the paint layers beautifully over time.
  fill(brushRed, 100, brushBlue, 15);
  
  // Draw a very soft, thin white border around our brush shapes
  stroke(255, 30); 
  strokeWeight(1);

  // -----------------------------------------------------------------------
  // THE MIRROR EXTRAVAGANZA (Symmetry Art)
  // -----------------------------------------------------------------------
  // Top-Left Brush (Tracks your actual mouse cursor)
  ellipse(mouseX, mouseY, brushSize, brushSize);
  
  // Top-Right Brush (Mirrors you horizontally across the center)
  ellipse(width - mouseX, mouseY, brushSize, brushSize);
  
  // Bottom-Left Brush (Mirrors you vertically across the center)
  ellipse(mouseX, height - mouseY, brushSize, brushSize);
  
  // Bottom-Right Brush (Perfect diagonal mirror)
  ellipse(width - mouseX, height - mouseY, brushSize, brushSize);
}

// -----------------------------------------------------------------------
// THE RESET BUTTON
// If your canvas gets too messy, tap any key to wash the canvas clean.
// -----------------------------------------------------------------------
function keyPressed() {
  background(10, 15, 25);
}
