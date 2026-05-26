// =========================================================================
// THE CHAOS FACE
// Uses direct numbers and basic math. No complex map() tracking!
// =========================================================================

function setup() {
  // createCanvas(Width, Height) in pixels.
  // This sets up a square drawing board. (0,0) is the top-left corner!
  createCanvas(600, 600);
}

function draw() {
  // background(Red, Green, Blue) -> Values go from 0 to 255.
  // This wipes the canvas with midnight blue 60 times a second so animations stay clean.
  background(20, 30, 50);
  
  // -----------------------------------------------------------------------
  // THE MONSTER'S HEAD
  // -----------------------------------------------------------------------
  stroke(255);          // Pick up a white marker for the outline (255 = max white)
  strokeWeight(5);      // Press down hard! Makes the outline 5 pixels thick and cartoony
  fill(255, 204, 0);    // Paintbrush color: Bright yellow (Max Red, High Green, No Blue)
  
  // ellipse(X_Center, Y_Center, Width, Height)
  // Placing the center at (300, 300) puts this 350-pixel circle dead-center.
  ellipse(300, 300, 350, 350);
  
  // -----------------------------------------------------------------------
  // THE INTERACTIVE EYEBALLS
  // -----------------------------------------------------------------------
  fill(255);            // Change the paintbrush to pure white for the eye whites
  
  // Left Eyeball: Placed to the left (X=230) and slightly high up (Y=260)
  ellipse(230, 260, 60, 60);
  
  // Right Eyeball: Placed to the right (X=370) at the exact same height (Y=260)
  ellipse(370, 260, 60, 60);
  
  // -----------------------------------------------------------------------
  // THE PUPIL TRACKING SYSTEM (Simple Division!)
  // mouseX and mouseY constantly track where your computer cursor is.
  // Instead of map(), we just divide the mouse positions by 40.
  // This scales down the movement so the black pupils stay inside the eyes!
  // -----------------------------------------------------------------------
  let shiftX = mouseX / 40;
  let shiftY = mouseY / 40;
  
  fill(0);              // Change the paintbrush to pitch black for the pupils
  noStroke();           // Pupils look cleaner without an extra outline
  
  // Draw Left Pupil: Anchored at center (230, 260) but shifts with the mouse offset
  ellipse(230 + shiftX, 260 + shiftY, 20, 20);
  
  // Draw Right Pupil: Anchored at center (370, 260) but shifts with the mouse offset
  ellipse(370 + shiftX, 260 + shiftY, 20, 20);

  // -----------------------------------------------------------------------
  // THE MOUTH (Conditionals: If / Else)
  // We ask the computer a question: Is the user clicking down on the mouse?
  // -----------------------------------------------------------------------
  stroke(40);           // Turn borders back on for the mouth expressions
  strokeWeight(4);
  
  if (mouseIsPressed) {
    // [IF THE MOUSE IS CLICKED: SCREAM MODE!]
    fill(200, 50, 50);  // Change paintbrush to an angry, bloody red
    
    // Draw a massive, 100-pixel wide open screaming mouth
    ellipse(300, 390, 100, 100); 
    
    fill(255);          // Switch to white ink for text
    textSize(24);       // Make the font big and bold
    textAlign(CENTER);  // Center the text alignment
    
    // text("Message", X, Y) -> Writes text right above the head
    text("AAAAHHHH!", 300, 150);
    
  } else {
    // [IF THE MOUSE IS NOT CLICKED: NERVOUS JITTER MODE!]
    fill(0);            // Change paintbrush back to black
    
    // The random(min, max) function rolls a digital dice 60 times a second.
    // It picks a chaotic, unpredictable number between 40 and 120 pixels wide.
    // We save that crazy shifting number inside a variable called 'mouthWidth'.
    let mouthWidth = random(40, 120); 
    
    // Draw a flat mouth that twitches violently because its width keeps changing!
    ellipse(300, 390, mouthWidth, 30);
  }
}
