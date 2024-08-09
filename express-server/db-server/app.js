var express = require('express');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var swtoolRouter = require('./routes/swtoolRoute');

var app = express();

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/tool/swtool', swtoolRouter);

module.exports = app;
