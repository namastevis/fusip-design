// =========================================================================
// THE SIMPLIFIED ANIME CHARACTER
// Uses only basic shapes and direct mouse tracking. No complex math!
// =========================================================================

function setup() {
  // Create our 600x600 drawing board
  createCanvas(600, 600);
}

function draw() {
  // Light purple/blue background tint
  background(230, 235, 255);
  
  // -----------------------------------------------------------------------
  // 1. THE BACK HAIR (Drawn first so it sits behind the head)
  // -----------------------------------------------------------------------
  noStroke();
  fill(200, 100, 200); // Solid purple hair color
  
  // Two long rectangles for the back hair strands
  rect(150, 200, 80, 300); // Left side back hair
  rect(370, 200, 80, 300); // Right side back hair

  // -----------------------------------------------------------------------
  // 2. THE HEAD & CHIN
  // -----------------------------------------------------------------------
  stroke(40);
  strokeWeight(4);
  fill(255, 230, 210); // Skin color
  
  // Main round head
  ellipse(300, 280, 260, 260);
  
  // Pointy anime chin (Triangle pointing down)
  // Corner 1: Left cheek (175, 320), Corner 2: Right cheek (425, 320), Corner 3: Chin tip (300, 430)
  triangle(175, 320, 425, 320, 300, 430);
  
  // Quick fix: Hide the inside line of the triangle with a small skin-colored rectangle
  noStroke();
  rect(177, 280, 246, 50);

  // -----------------------------------------------------------------------
  // 3. THE EXPRESSIVE ANIME EYES (They follow the mouse directly!)
  // -----------------------------------------------------------------------
  stroke(40);
  strokeWeight(5);
  fill(255); // White eye bases
  
  // Draw left and right eye outlines
  rect(190, 250, 70, 60, 15);
  rect(340, 250, 70, 60, 15);
  
  // THE PUPILS: We use mouseX and mouseY but divide them by 40 
  // so the pupils shift gently instead of flying off the face!
  let shiftX = mouseX / 40;
  let shiftY = mouseY / 40;
  
  noStroke();
  fill(255, 50, 100); // Bright pink pupils
  
  // Large anime pupils that slide around with the mouse shift
  ellipse(210 + shiftX, 270 + shiftY, 35, 45); // Left pupil
  ellipse(360 + shiftX, 270 + shiftY, 35, 45); // Right pupil
  
  // White eye twinkles/shines that stay glued to the pupils
  fill(255);
  ellipse(215 + shiftX, 265 + shiftY, 10, 10);
  ellipse(365 + shiftX, 265 + shiftY, 10, 10);

  // -----------------------------------------------------------------------
  // 4. FACE DETAILS (Eyebrows, Nose, Mouth)
  // -----------------------------------------------------------------------
  stroke(40);
  strokeWeight(4);
  
  // Flat, simple eyebrows
  line(185, 230, 245, 235);
  line(415, 230, 355, 235);
  
  // A tiny dot for a nose
  point(300, 340);
  
  // Simple interactive mouth:
  // If the user presses the mouse, it becomes a giant screaming open mouth!
  // Otherwise, it is just a simple resting flat line.
  if (mouseIsPressed) {
    fill(255, 100, 100); // Red inside mouth
    ellipse(300, 380, 40, 60);
  } else {
    line(285, 380, 315, 380); // Neutral mouth line
  }

  // -----------------------------------------------------------------------
  // 5. THE FRONT HAIR SPIKES (Drawn last to sit on top of the face)
  // -----------------------------------------------------------------------
  noStroke();
  fill(200, 100, 200); // Match back hair color
  
  // Three giant downward triangles for classic anime bangs
  triangle(160, 160, 240, 160, 200, 260); // Left hair spike
  triangle(230, 150, 310, 150, 270, 280); // Middle hair spike
  triangle(300, 150, 380, 150, 340, 280); // Right hair spike
  triangle(360, 160, 440, 160, 400, 260); // Far right hair spike
}
