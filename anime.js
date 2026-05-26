// =========================================================================
// THE ANIME CHARACTER
// =========================================================================

function setup() {
  // Create a standard square canvas. 
  // Remember: X goes from 0 to 600 (left to right)
  //           Y goes from 0 to 600 (top to bottom)
  createCanvas(600, 600);
}

function draw() {
  // Clear the screen 60 times a second with a soft, bright pastel background tint.
  // (Red, Green, Blue) values mix together here to form a light bluish-gray.
  background(240, 245, 255);
  
  // -----------------------------------------------------------------------
  // 1. THE BACK HAIR (Layered FIRST so it sits behind the head)
  // -----------------------------------------------------------------------
  // map() acts like an automatic scale translator.
  // It takes the mouse's X position on the whole screen (0 to 600)
  // and shrinks it proportionally into a number between 100 and 255 for the Red color channel.
  let hairR = map(mouseX, 0, width, 100, 255);
  
  // It takes the mouse's Y position on the whole screen (0 to 600)
  // and shrinks it proportionally into a number between 150 and 255 for the Blue color channel.
  let hairB = map(mouseY, 0, height, 150, 255);
  
  // Apply our custom interactive color mix! 
  // Moving the mouse will smoothly shift this hair color from purple to pink.
  fill(hairR, 120, hairB); 
  noStroke(); // Turn off borders so the background hair chunks look soft
  
  // rect(X, Y, Width, Height, CornerRadius)
  // These two rectangles create the long hair strands dropping down behind the shoulders.
  // The 5th number (20) rounds the bottom corners of the rectangles.
  rect(150, 250, 80, 250, 20); // Left hair strand
  rect(370, 250, 80, 250, 20); // Right hair strand

  // -----------------------------------------------------------------------
  // 2. THE FACE BACKGROUND (Chiseled anime jaw structure)
  // -----------------------------------------------------------------------
  stroke(40);         // Pick up a dark charcoal marker for the outlines
  strokeWeight(4);    // Set the outline thickness to 4 pixels
  fill(255, 235, 220); // Mix max Red and high Green/Blue to make an anime skin tone
  
  // ellipse(X_Center, Y_Center, Width, Height)
  // Draws the upper curved part of the skull right in the middle of the screen.
  ellipse(300, 300, 260, 280);
  
  // triangle(X1, Y1, X2, Y2, X3, Y3)
  // To get that sharp anime chin, we map out 3 connection points:
  // Point 1 (180, 340) is the left cheekbone.
  // Point 2 (420, 340) is the right cheekbone.
  // Point 3 (300, 440) is the sharp tip of the chin pointing down.
  triangle(180, 340, 420, 340, 300, 440);
  
  // CLEANUP TRICK: The triangle outline creates an ugly line straight across the face.
  // We turn off borders (noStroke) and draw a skin-colored block right over that seam line to hide it!
  noStroke();
  rect(182, 300, 236, 42);

  // -----------------------------------------------------------------------
  // 3. THE EXPRESSIVE ANIME EYES 
  // -----------------------------------------------------------------------
  stroke(40);        // Turn outlines back on for the eye frames
  strokeWeight(5);   // Make the eyelashes thick and stylized
  fill(255);         // Pure white paint for the sclera (eyeballs)
  
  // rect(X, Y, Width, Height, CornerRadius)
  // Draw two wide rectangles with rounded corners (20) to form expressive eye bases.
  rect(190, 260, 75, 60, 20);  // Left Eye Base
  rect(335, 260, 75, 60, 20);  // Right Eye Base
  
  // --- EYE PUPIL TRACKING LOGIC ---
  // If we just used mouseX directly, the black pupils would fly out of the head!
  // We use map() to capture the massive screen mouse coordinates and scale them down
  // to a tiny bounding box: between -15 and +15 horizontally, and -10 and +10 vertically.
  let pupilX = map(mouseX, 0, width, -15, 15);
  let pupilY = map(mouseY, 0, height, -10, 10);
  
  noStroke();            // Pupils don't need outer borders
  fill(hairR, 80, 200);  // Make the pupil color react to the hair color
  
  // Draw Large, Tall Anime Pupils. 
  // We anchor them to the eye frames (227 and 372) but add our tiny pupil offsets to make them track.
  ellipse(227 + pupilX, 290 + pupilY, 40, 50); // Left Pupil
  ellipse(372 + pupilX, 290 + pupilY, 40, 50); // Right Pupil
  
  // --- ANIME SHINE SPARKLES ---
  // Pure white mini-circles placed on top of the pupils to capture that classic glossy animation style.
  fill(255);
  ellipse(235 + pupilX, 280 + pupilY, 12, 12); // Primary big gloss (Left)
  ellipse(380 + pupilX, 280 + pupilY, 12, 12); // Primary big gloss (Right)
  ellipse(220 + pupilX, 300 + pupilY, 6, 6);   // Secondary tiny twinkle (Left)
  ellipse(365 + pupilX, 300 + pupilY, 6, 6);   // Secondary tiny twinkle (Right)

  // -----------------------------------------------------------------------
  // 4. FACE DETAILS (Eyebrows, Nose, Mouth)
  // -----------------------------------------------------------------------
  stroke(40);        // Turn outlines back on for facial features
  strokeWeight(4);   
  
  // line(StartX, StartY, EndX, EndY)
  // Two simple, slightly slanted lines to act as sharp eyebrows.
  line(185, 240, 255, 245); // Left eyebrow
  line(415, 240, 345, 245); // Right eyebrow
  
  // A tiny 5-pixel long line in the middle of the face to act as a minimal anime nose.
  line(300, 340, 302, 345);
  
  // --- INTERACTIVE MOUTH GRAPHIC ---
  // We translate the mouse's vertical position into how deep the mouth curves.
  // If the mouse goes up, the center point drops to create a wider curve (smile!).
  let mouthCurveY = map(mouseY, 0, height, 385, 395);
  noFill(); // Ensure the mouth is just a line and doesn't fill with solid color
  
  // Custom custom curved shape path
  beginShape();
  vertex(280, 390); // Left edge of the mouth
  // quadraticVertex(ControlPointX, ControlPointY, TargetX, TargetY)
  // This uses a invisible mathematical magnet point to pull the line downward into a smooth arc.
  quadraticVertex(300, mouthCurveY, 320, 390); // Right edge of the mouth
  endShape();

  // -----------------------------------------------------------------------
  // 5. THE FRONT HAIR (Spikes layered LAST so they sit on top of the face)
  // -----------------------------------------------------------------------
  fill(hairR, 120, hairB); // Match the front hair spikes to the exact same color as the back hair
  noStroke();              // Keep hair strands clean and outline-free
  
  // triangle(X1, Y1, X2, Y2, X3, Y3)
  // We draw 4 downward-pointing triangles starting from the forehead down across the eyes.
  triangle(160, 180, 240, 180, 190, 270); // Far-left bang
  triangle(230, 170, 320, 170, 275, 280); // Main left-center face framing spike
  triangle(280, 170, 370, 170, 325, 280); // Main right-center face framing spike
  triangle(360, 180, 440, 180, 410, 270); // Far-right bang
}
