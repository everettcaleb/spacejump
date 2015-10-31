var express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static(path.resolve('wwwroot')));
app.get('/', function(req, res) {
  res.sendfile(path.resolve('wwwroot', 'index.html'));
});

app.listen(3000);
console.log("Your website has started, access it at http://localhost:5000/");
console.log("Close this window to stop the website.");
