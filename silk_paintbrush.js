// =========================================================================
// THE DIGITAL SILK PAINTBRUSH
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
  // THE GENERATIVE ART SECRET:
  // Notice that we DO NOT call background() here anymore!
  // Because we don't erase the screen, every shape we draw stays forever,
  // layering on top of the old ones to create a complex piece of art.
  // -----------------------------------------------------------------------
  
  // 1. CHOOSE A COLOR THAT CHANGES WITH THE MOUSE
  // As you move right (mouseX grows), the red channel increases.
  // As you move down (mouseY grows), the blue channel increases.
  // This gives the user an automatic, interactive rainbow brush!
  let brushRed = mouseX / 3; 
  let brushBlue = mouseY / 2;
  
  // fill(Red, Green, Blue, Opacity)
  // Keeping opacity ultra-low (15) means the paint is mostly see-through.
  // The colors only look bright and solid when you draw over the same spot twice!
  fill(brushRed, 100, brushBlue, 15);
  
  // Draw a very soft, thin white border around our brush shapes
  stroke(255, 30); 
  strokeWeight(1);

  // 2. THE MIRROR EXTRAVAGANZA (Symmetry Art)
  // Instead of drawing just one circle, we draw four circles at the same time
  // in mirrored positions. This instantly turns simple doodles into gorgeous symmetry art!
  
  // Top-Left Brush (Tracks your actual mouse)
  ellipse(mouseX, mouseY, 40, 40);
  
  // Top-Right Brush (Mirrors you horizontally)
  ellipse(width - mouseX, mouseY, 40, 40);
  
  // Bottom-Left Brush (Mirrors you vertically)
  ellipse(mouseX, height - mouseY, 40, 40);
  
  // Bottom-Right Brush (Perfect diagonal mirror)
  ellipse(width - mouseX, height - mouseY, 40, 40);
}

// 3. THE RESET BUTTON
// If their canvas gets too messy, they can tap any key to wash the canvas clean.
function keyPressed() {
  background(10, 15, 25);
}
