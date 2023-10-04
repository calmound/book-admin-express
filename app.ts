import { User } from './model';
import BookRouter from './routes/book';
import express, { Request, Response, NextFunction } from 'express';

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
app.use('/api/books', BookRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

app.listen('3005', () => {
  console.log('server start at 3005');
});

module.exports = app;

// 60s倒计时
