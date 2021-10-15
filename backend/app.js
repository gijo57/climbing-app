const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('./controllers/user');
const authRouter = require('./controllers/auth');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('hi');
});

module.exports = app;
