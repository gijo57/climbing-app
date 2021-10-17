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
});

module.exports = router;
