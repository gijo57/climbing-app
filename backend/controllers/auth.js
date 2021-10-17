const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.post('/signup', async (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    firstName,
    lastName,
    email,
    passwordHash
  });

  const savedUser = await user.save();

  res.json(savedUser);
});

router.post('/login', async (req, res, next) => {
  const { emailOrUsername, password } = req.body;
  const user = await User.findOne().or([
    { username: emailOrUsername },
    { email: emailOrUsername }
  ]);

  const correctPassword =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && correctPassword)) {
    return res.status(401).json({
      error: 'Incorrect username or password.'
    });
  }

  req.session.userId = user._id;

  res.json(user);
});

router.post('/logout', (req, res, next) => {
  req.session.destroy();
  res.json('Logged out');
});

module.exports = router;
