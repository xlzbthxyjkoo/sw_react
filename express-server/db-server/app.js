var express = require('express');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

var app = express();

app.use('/', indexRouter);
app.use('/users', userRouter);

module.exports = app;
