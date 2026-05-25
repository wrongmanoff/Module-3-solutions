/**
 * script.js  –  Module 4 Assignment Solution
 * 
 * Task: Loop over an array of names.
 *   - If the name starts with 'j' or 'J'  → print "Goodbye <name>"
 *   - Otherwise                            → print "Hello <name>"
 * 
 * Uses two external libraries:
 *   utilities.js  → provides printOut(message)
 *   nameutil.js   → provides isSpecialName(name)
 */

(function () {

  // Step 1: Array of names to process
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim"
  ];

  // Step 2: Loop over each name and print the correct greeting
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    if (isSpecialName(name)) {
      // Name starts with J or j → Goodbye
      printOut("Goodbye " + name);
    } else {
      // All other names → Hello
      printOut("Hello " + name);
    }
  }

})();