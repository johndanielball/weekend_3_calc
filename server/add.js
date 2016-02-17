var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  console.log('request body:: ',  req.body);
  var data = {};
  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);
  data.result = x + y;
  res.send(data);
});

module.exports = router;
