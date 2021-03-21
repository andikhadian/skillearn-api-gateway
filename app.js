require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const mediaRouter = require('./routes/media');
const orderPaymentsRouter = require('./routes/orderPayments');
const refreshTokensRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const imageCoursesRouter = require('./routes/imageCourses');
const myCoursesRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/reviews');
const webhookRouter = require('./routes/webhook');

const app = express();

const verifyToken = require('./middlewares/verifyToken')
const can = require('./middlewares/permission')

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/media', verifyToken, can('admin', 'student'), mediaRouter);
app.use('/order_payments', verifyToken, can('admin', 'student'), orderPaymentsRouter);
app.use('/webhook', webhookRouter);
app.use('/refresh_tokens', refreshTokensRouter);
app.use('/reviews', verifyToken, can('admin', 'student'), reviewsRouter);
app.use('/my_courses', verifyToken, can('admin', 'student'), myCoursesRouter);
app.use('/image_courses', verifyToken, can('admin'), imageCoursesRouter);
app.use('/lessons', verifyToken, can('admin'), lessonsRouter);
app.use('/chapters', verifyToken, can('admin'), chaptersRouter);
app.use('/mentors', verifyToken, can('admin'), mentorsRouter);

app.listen(3000, () => console.log('server running on port 3000!'))

module.exports = app;
