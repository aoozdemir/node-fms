let createError = require('http-errors');
let express = require('express');
let methodOverride = require('method-override')
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let strftime = require('strftime')

let apiRouter = require('./routes/api');
let indexRouter = require('./routes/index');

let argv = require('./utils/argv');

const directoryPath = path.join(__dirname, argv.directory);

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.locals = {
  humanSize: function (size) {
    let hz;
    if (size < 1024) hz = size + ' B';
    else if (size < 1024 * 1024) hz = (size / 1024).toFixed(2) + ' KB';
    else if (size < 1024 * 1024 * 1024) hz = (size / 1024 / 1024).toFixed(2) + ' MB';
    else hz = (size / 1024 / 1024 / 1024).toFixed(2) + ' GB';
    return hz;
  },
  humanTime: function (timestamp) {
    let t = new Date(timestamp);
    return strftime("%b %d, %Y %H:%M:%S", t);
  }
}

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
