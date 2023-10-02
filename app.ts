import { User } from './model';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const req = require('express/lib/request');
require('./model/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 添加中间件，记录开发环境日志
app.use(logger('dev'));
// 添加中间件，解析json格式
app.use(express.json());
// 添加中间件，解析urlencoded格式，只解析一次
app.use(express.urlencoded({ extended: false }));
// 添加中间件，解析cookie
app.use(cookieParser());
// 添加中间件，静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('/', (request, response) => {
  const userModel = new User({ name: 'sanmu', nickName: '三木' });
  userModel.save();
  response.json({ success: true });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen('3005', () => {
  console.log('server start at 3005');
});

module.exports = app;

// 60s倒计时
