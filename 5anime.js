// =========================================================================
// THE CYBERPUNK ANIME CHARACTER
// =========================================================================

function setup() {
  // Sets up our square 600x600 digital drawing board.
  // REMEMBER THE GRID: X runs left-to-right (0 to 600)
  //           Y runs top-to-bottom (0 to 600)
  createCanvas(600, 600);
}

function draw() {
  // THE BACKGROUND: We pick a deep, cool dark-navy color.
  // Using a dark background makes any bright or neon shapes we draw on top 
  // look like they are glowing like a smartphone screen in a dark room.
  background(15, 20, 30);
  
  // -----------------------------------------------------------------------
  // PART 1: THE HAIR (Layered FIRST so it sits behind the head)
  // -----------------------------------------------------------------------
  noStroke();          // Turn off outlines so the hair looks smooth and solid
  fill(0, 230, 180);   // Dip our paintbrush into a bright neon teal ink
  
  // DRAW THE BACK HAIR: Two long rectangles dropped behind the shoulders. 
  // The 5th number (10) curves the bottom edges slightly to look like hair tips.
  // rect(X, Y, Width, Height, CornerRadius)
  rect(150, 200, 80, 300, 10); // Left hair strand
  rect(370, 200, 80, 300, 10); // Right hair strand
  
  // THE MOVING HAIR SPIKES: The tips of the hair grow based on the mouse position!
  // It starts at 220 pixels high, and as you move your mouse to the right (mouseX grows), 
  // the hair spikes stretch downward. We divide by 6 so it moves smoothly.
  let spikeDrop = 220 + mouseX / 6; 
  
  // Draw 4 downward-pointing triangles to look like sharp anime bangs.
  // triangle(X1, Y1, X2, Y2, X3, Y3)
  // The third set of numbers controls the very tip of each spike!
  triangle(160, 150, 240, 150, 200, spikeDrop);       // Left-side spike
  triangle(230, 140, 310, 140, 270, spikeDrop + 20);  // Middle-left spike (longer)
  triangle(300, 140, 380, 140, 340, spikeDrop + 20);  // Middle-right spike (longer)
  triangle(360, 150, 440, 150, 400, spikeDrop);       // Right-side spike

  // -----------------------------------------------------------------------
  // PART 2: THE FACE BASE (Building the head and jaw)
  // -----------------------------------------------------------------------
  stroke(255, 50);     // Pick a white marker for outlines, but make it mostly see-through (50)
  strokeWeight(3);     // Set the thickness of our outline marker to 3 pixels
  fill(25, 35, 50);    // Choose a cool, robotic dark-slate color for the skin
  
  // Draw a big round circle for the main skull shape
  ellipse(300, 280, 260, 260); 
  
  // Draw an upside-down triangle to act as the sharp, pointy anime chin.
  // Point 1 is left cheek (175, 320), Point 2 is right cheek (425, 320), Point 3 is chin tip (300, 430)
  triangle(175, 320, 425, 320, 300, 430); 
  
  // THE COVER-UP TRICK: Fusing the circle and triangle leaves an ugly line 
  // cutting straight across the middle of the face. We turn off lines (noStroke) and slap a 
  // skin-colored rectangle over that line to make the face look like one seamless piece.
  noStroke();
  rect(177, 280, 246, 50);

  // -----------------------------------------------------------------------
  // PART 3: THE SCI-FI ANIME EYES (They track your mouse!)
  // -----------------------------------------------------------------------
  stroke(0, 230, 180); // Choose a bright neon teal marker for the eye frames
  strokeWeight(4);     // Make the eyeliner borders thick and bold
  fill(10, 15, 25);    // Paint the inside of the eyes pitch black
  
  // Draw two wide rectangles with rounded corners (15) to make cyber eye goggles
  rect(190, 250, 75, 60, 15);  // Left eye frame
  rect(335, 250, 75, 60, 15);  // Right eye frame
  
  // THE EYE-TRACKING ENGINE: We track where your real computer mouse is.
  // We divide mouseX and mouseY by 35 so the inner pupils move gently 
  // in tiny steps instead of flying completely out of the eye frame!
  let shiftX = mouseX / 35;
  let shiftY = mouseY / 35;
  
  noStroke(); // Turn off borders so the glowing pupils look like pure energy
  
  // THE ACTION TRIGGER: What happens when the player clicks down?
  if (mouseIsPressed) {
    // [STATE 1: THE LASER ATTACK MODE!]
    fill(255, 0, 100, 80); // Pick a hot pink color, but make it translucent/glassy (80)
    
    // Draw two giant vertical laser rectangles shooting straight down off the screen.
    // They are glued to the pupils, so the lasers aim wherever you look!
    rect(205 + shiftX, 265 + shiftY, 15, 400); // Left laser beam
    rect(350 + shiftX, 265 + shiftY, 15, 400); // Right laser beam
    
    // Draw a super-bright solid center core inside the eyes
    fill(255, 50, 120); 
    ellipse(212 + shiftX, 277 + shiftY, 25, 35); // Left active pupil
    ellipse(357 + shiftX, 277 + shiftY, 25, 35); // Right active pupil
    
  } else {
    // [STATE 2: NORMAL IDLE MODE]
    // If the mouse is NOT clicked, just draw friendly, glowing neon pink pupils.
    fill(255, 0, 100); 
    ellipse(212 + shiftX, 277 + shiftY, 25, 35); // Left resting pupil
    ellipse(357 + shiftX, 277 + shiftY, 25, 35); // Right resting pupil
  }
  
  // THE EYE TWINKLE: Classic glossy animation shine reflections.
  // These small white circles sit on top and use the same 'shift' numbers, 
  // making sure the glossy lens reflection stays locked onto the pupils as they look around!
  fill(255);
  ellipse(217 + shiftX, 270 + shiftY, 8, 8); // Left eye shine
  ellipse(362 + shiftX, 270 + shiftY, 8, 8); // Right eye shine

  // -----------------------------------------------------------------------
  // PART 4: THE EXPRESSION & THE GLITCH MOUTH
  // -----------------------------------------------------------------------
  stroke(255, 0, 100); // Match the mouth/eyebrow lines to the neon pink pupils
  strokeWeight(4);     // Give them a bold, sharp presence
  
  // Two angled lines pointing downward toward the center to show a focused or serious look
  line(185, 235, 245, 240); // Left eyebrow
  line(415, 235, 355, 240); // Right eyebrow
  
  // THE GLITCH ENGINE: The mouth isn't a normal smile—it's a computer glitch!
  // Every frame, the computer rolls a random dice between -5 and +5 pixels.
  let mouthJitter = random(-5, 5); 
  
  // Draw 3 horizontal lines that shake up and down at different speeds.
  // It makes the mouth look like an audio speaker wave or a glowing neon soundbar!
  line(285, 380 + mouthJitter, 315, 380 + mouthJitter);             // Center mouth line
  line(290, 385 + mouthJitter * 0.5, 310, 385 + mouthJitter * 0.5); // Bottom vibration line
  line(295, 375 + mouthJitter * 1.5, 305, 375 + mouthJitter * 1.5); // Top vibration line
}
