const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.post('/sign-up', async (req, res, next) => {
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
  req.session.userId = savedUser.id;

  res.json({ user: savedUser });
});

router.post('/sign-in', async (req, res, next) => {
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
  req.session.userId = user.id;

  res.json({ user });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
