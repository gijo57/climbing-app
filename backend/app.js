const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('./controllers/user');
const authRouter = require('./controllers/auth');
const session = require('./config/session');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(session);

//app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('hi');
});

module.exports = app;
