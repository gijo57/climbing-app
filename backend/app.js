const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('./controllers/user');
const authRouter = require('./controllers/auth');
const session = require('./config/session');
const authDeserializer = require('./middleware/auth-deserializer.js');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(session);
app.use(authDeserializer);

//app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

module.exports = app;
