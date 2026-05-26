// =========================================================================
// THE ELASTIC MONSTER NODE (The 2-Minute Demo)
// =========================================================================

function setup() {
  // Create a 600x600 digital canvas window for our sketch
  createCanvas(600, 600);
}

function draw() {
  // THE MOTION BLUR SECRET: We paint a dark navy background every frame, 
  // but we add a 4th number: 30 (the see-through opacity value).
  // Because it is translucent, old drawings take a few frames to fade away,
  // leaving a gorgeous ghost-like trail behind the moving monster!
  background(15, 20, 30, 30);
  
  // -----------------------------------------------------------------------
  // THE RUBBER-BAND EYE STRINGS
  // -----------------------------------------------------------------------
  stroke(0, 255, 200); // Pick up a bright neon cyan marker for our strings
  strokeWeight(3);     // Set the line thickness to 3 pixels
  
  // line(StartX, StartY, EndX, EndY)
  // Top-Left String: Starts permanently stuck at the top-left corner (0,0) 
  // and stretches all the way to the moving mouse cursor coordinates!
  line(0, 0, mouseX, mouseY);     
  
  // Top-Right String: Starts permanently stuck at the top-right corner (600,0)
  // and stretches all the way to the exact same mouse cursor!
  line(600, 0, mouseX, mouseY);   
  
  // -----------------------------------------------------------------------
  // THE DYNAMIC FACE NODE
  // -----------------------------------------------------------------------
  noStroke(); // Turn off borders for the head shapes so they look smooth
  
  // THE ACTION TRIGGER: Check if the user is holding down the mouse click
  if (mouseIsPressed) {
    
    // [STATE 1: THE MELTDOWN SHOCKWAVE]
    fill(255, 50, 100); // Change our paintbrush to an angry, shocking pink
    
    // ellipse(X_Center, Y_Center, Width, Height)
    // The head instantly expands into a giant 150-pixel screaming monster sphere!
    ellipse(mouseX, mouseY, 150, 150);
    
    // Switch paint color to glowing yellow for the laser eyes
    fill(255, 255, 0);
    
    // Draw two tall, angry oval pupils centered right around the mouse position
    ellipse(mouseX - 20, mouseY, 20, 40); // Left angry eye
    ellipse(mouseX + 20, mouseY, 20, 40); // Right angry eye
    
  } else {
    
    // [STATE 2: THE CALM MODE]
    // If the mouse is NOT clicked, keep the character peaceful and white.
    fill(255); 
    
    // Draw a standard 60-pixel friendly round head that follows the mouse perfectly
    ellipse(mouseX, mouseY, 60, 60);
    
    // Switch paint color to pitch black for normal resting eyes
    fill(0);
    
    // Draw two small, calm circle pupils slightly above the mouse center point
    ellipse(mouseX - 12, mouseY - 5, 10, 10); // Left normal eye
    ellipse(mouseX + 12, mouseY - 5, 10, 10); // Right normal eye
    
    // DRAW A NERVOUS TWITCHY SMILE:
    stroke(0);           // Pick up a black marker line for the smile
    strokeWeight(2);     // Make it a thin, subtle line
    
    // We calculate the Y height of the mouth using random(-2, 2).
    // This rolls a tiny digital dice 60 times a second, causing the mouth 
    // line to shake and tremble violently while moving!
    line(mouseX - 10, mouseY + 15 + random(-2, 2), mouseX + 10, mouseY + 15 + random(-2, 2));
  }
}
