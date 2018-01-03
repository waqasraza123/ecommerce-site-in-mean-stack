var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var product = require('./routes/product');
var category = require('./routes/category');
var user = require('./routes/user');
var cart = require('./routes/cart');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/product', express.static(path.join(__dirname, 'dist')));
app.use('/api/product', product);
// app.use('/category', express.static(path.join(__dirname, 'dist')));
app.use('/api/category', category);
// app.use('/user', express.static(path.join(__dirname, 'dist')));
app.use('/api/user', user);
// app.use('/cart', express.static(path.join(__dirname, 'dist')));
app.use('/api/cart', cart);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;