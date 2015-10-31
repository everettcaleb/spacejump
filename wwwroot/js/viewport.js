define([
  'helpers'
], function(helpers) {
  var c = document.getElementById("canvas"),
    vw = 0, vh = 0, vx = 0, ar = 4 / 3;

  // Code to handle screen resizes and automatically scale and center canvas
  function onWindowResize() {
    var size = helpers.getWindowSize();

    // Check aspect ratio and calculate canvas size
    if(size.width / size.height > ar) {
      vh = size.height;
      vw = size.height * ar;
    }
    else {
      vw = size.width;
      vh = size.width / ar;
    }

    // Calculate x offset to center
    vx = (size.width - vw) / 2;

    // Set style
    c.style.width = vw + "px";
    c.style.height = vh + "px";
    c.style.left = vx + "px";
  }

  onWindowResize(); // initialize canvas to initial size
  helpers.addEvent(window, 'resize', onWindowResize);
});
