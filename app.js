var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// GET method route
router.get('/users', function (req, res) {
  res.send('GET request !!!!');
})

// POST method route
router.post('/users', function (req, res) {
  console.log("POST Request Body : ",req.body);
  res.send('POST request !!!!');
})


// PUT method route
router.put('/users', function (req, res) {
  console.log("PUT Request Body : ",req.body);
  res.send('PUT request !!!!!');
})
app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ "error": "Something broke" });
});


module.exports = app;
