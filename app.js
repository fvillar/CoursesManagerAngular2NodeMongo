var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var open = require('open');
var cors = require('cors');

////////////////////////////////////////////
////////////////  ROUTES  //////////////////
////////////////////////////////////////////
var routes = require('./routes/index');
var users = require('./routes/users');
var courses = require('./routes/courses');
var authors = require('./routes/authors');
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// Port for the app
const port = 7777;
var app = express();
// CORS support
// Explanation: http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Open web browser in the app
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

////////////////////////////////////////////
//////////////  USE ROUTES  ////////////////
////////////////////////////////////////////
app.use('/', routes);
app.use('/users', users);
app.use('/courses', courses);
app.use('/authors', authors);
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
