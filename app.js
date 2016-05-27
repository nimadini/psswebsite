var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var creds = require('./config/credentials');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var main = require('./routes/main');
var postCtrl = require('./controllers/post-ctrl');

var app = express();

/**
 * Connect to MongoDB.
 */

mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

mongoose.connect(creds.db);

// require('./config/passport')(passport); // pass passport for configuration


// ---swig expts start
var swig = require('swig');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');

swig.setDefaults({
    loader: swig.loaders.fs(__dirname + '/views'),
    cache: false
});

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);


app.get('/getPosts', postCtrl.getPosts);
app.post('/storePost', postCtrl.storePost);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/', main);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

console.log("here");

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
      console.log("ERROR1");
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
    console.log("ERROR2");

    res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
