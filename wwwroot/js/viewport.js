define([
  'helpers'
], function(helpers) {
  var c = document.getElementById("canvas"),
    // width, height, x offset
    vw = 1000, vh = 750, vx = 0,
    // view scaling factors from view -> window
    vws = 1, vhs = 1,
    // constants
    VIEW_WIDTH = 1000, VIEW_HEIGHT = 750, VIEW_ASPECT = 4 / 3,
    exports = {};

  // Code to handle screen resizes and automatically scale and center canvas
  function onWindowResize() {
    var size = helpers.getWindowSize();

    // Check aspect ratio and calculate canvas size
    if(size.width / size.height > VIEW_ASPECT) {
      vh = size.height;
      vw = size.height * VIEW_ASPECT;
    }
    else {
      vw = size.width;
      vh = size.width / VIEW_ASPECT;
    }

    // Calculate x offset to center
    vx = (size.width - vw) / 2;

    // Calculate scaling factors
    vws = vw / VIEW_WIDTH;
    vhs = vh / VIEW_HEIGHT;

    // Set style
    c.style.width = vw + "px";
    c.style.height = vh + "px";
    c.style.left = vx + "px";
  }

  // Function to transform vector from viewport coordinates (1000x750) to window coordinates
  // Returns object {x, y}
  exports.transformViewToWindow = function(x, y) {
    return {
      x: (x * vws) + vx,
      y: y * vhs
    };
  }

  // Main functionality
  onWindowResize(); // initialize canvas to initial size
  helpers.addEvent(window, 'resize', onWindowResize);
  return exports;
});
