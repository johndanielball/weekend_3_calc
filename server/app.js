var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var addHandler = require('./add.js');
var subtractHandler = require('./subtract.js');
var multiplyHandler = require('./multiply.js');
var divideHandler = require('./divide.js');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add', addHandler);
app.use('/subtract', subtractHandler);
app.use('/multiply', multiplyHandler);
app.use('/divide', divideHandler);

app.get('/*', function(req, res) {
  var filePath = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, 'public', filePath));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Express server listening on port:: ", port);
})
