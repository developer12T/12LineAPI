const express = require('express');
const path = require('path');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const messagingRouter = require('./routes/message');
const audienceRouter = require('./routes/audience');
const insightRouter = require('./routes/insights');

const app = express();

const errorHandler = require("./middleware/errorHandler")

app.use(cors());
app.use(errorHandler);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/message', messagingRouter);
app.use('/audience', audienceRouter);
app.use('/insights', insightRouter);

module.exports = app;
