// =========================================================================
// 1. THE SETUP FUNCTION (The "Birth Ceremony" of your program)
// This code runs exactly ONCE at the very beginning when you click 'Play'.
// =========================================================================
function setup() {
  // createCanvas(Width, Height) in pixels.
  // This buys a square digital sketchpad.
  // REMEMBER: (0,0) is the top-left corner of the screen!
  createCanvas(600, 600);
}

// =========================================================================
// 2. THE DRAW FUNCTION (The Infinite Flipbook)
// This code loops over and over again, 60 times every single second!
// =========================================================================
function draw() {
  // background(Red, Green, Blue) -> Values go from 0 to 255.
  // This acts as a digital eraser, painting the canvas a deep midnight blue 
  // at the start of every single frame so the old drawings are wiped away.
  background(20, 30, 50);
  
  // -----------------------------------------------------------------------
  // THE MONSTER'S HEAD
  // -----------------------------------------------------------------------
  stroke(255);          // Pick up a white marker for the outline (255 = max white)
  strokeWeight(5);      // Press down hard! Makes the outline 5 pixels thick and cartoony
  fill(255, 204, 0);    // Dip your paintbrush into bright yellow ink (Max Red, High Green, No Blue)
  
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
  // THE MAGIC PUPILS (The tracking system!)
  // mouseX and mouseY constantly track where your computer cursor is.
  // map() is a translator: It takes the giant screen size (0 to 600) 
  // and shrinks the movement down proportionally to fit a tiny window (-15 to 15).
  // This keeps the black pupils from flying completely out of the eyeballs!
  // -----------------------------------------------------------------------
  let pupilX = map(mouseX, 0, width, -15, 15);
  let pupilY = map(mouseY, 0, height, -15, 15);
  
  fill(0);              // Change the paintbrush to pitch black for the pupils
  
  // Draw Left Pupil: Anchored at center (230, 260) but shifts with the mouse offset
  ellipse(230 + pupilX, 260 + pupilY, 20, 20);
  
  // Draw Right Pupil: Anchored at center (370, 260) but shifts with the mouse offset
  ellipse(370 + pupilX, 260 + pupilY, 20, 20);

  // -----------------------------------------------------------------------
  // THE "CHOOSE YOUR OWN ADVENTURE" MOUTH (Conditionals)
  // We ask the computer a question: Is the user clicking down on the mouse?
  // -----------------------------------------------------------------------
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
    // It picks a chaotic, unpredictable number between 40 and 120 pixels.
    // We save that crazy shifting number inside a box called 'mouthWidth'.
    let mouthWidth = random(40, 120); 
    
    // Draw a flat, nervous mouth that twitches violently because its width keeps changing!
    ellipse(300, 390, mouthWidth, 30);
  }
}
