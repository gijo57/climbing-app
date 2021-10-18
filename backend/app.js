const express = require('express');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('./controllers/user');
const authRouter = require('./controllers/auth');
const sessionConfig = require('./config/session');

const app = express();
app.use(helmet());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

module.exports = app;
