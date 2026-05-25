/**
 * utilities.js
 * 
 * External library #1
 * Provides the 'printOut' function used to print messages to the console.
 * 
 * Fixed: wrapped everything in an IIFE and exported 'printOut'
 * to the global (window) object so script.js can use it.
 */

(function (global) {

  /**
   * Prints the given message to the browser console.
   * @param {string} message
   */
  function printOut(message) {
    console.log(message);
  }

  // Expose to global scope
  global.printOut = printOut;

})(window);