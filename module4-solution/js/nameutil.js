/**
 * nameutil.js
 * 
 * External library #2
 * Provides the 'isSpecialName' function used to check
 * whether a name starts with 'j' or 'J'.
 * 
 * Fixed: wrapped everything in an IIFE and exported 'isSpecialName'
 * to the global (window) object so script.js can use it.
 */

(function (global) {

  /**
   * Returns true if the name starts with 'j' or 'J', false otherwise.
   * @param {string} name
   * @returns {boolean}
   */
  function isSpecialName(name) {
    // charAt(0) gets the first letter; compare case-insensitively
    return name.charAt(0).toLowerCase() === 'j';
  }

  // Expose to global scope
  global.isSpecialName = isSpecialName;

})(window);