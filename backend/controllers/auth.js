const router = require('express').Router();
const bcrypt = require('bcrypt');
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

  res.json(savedUser);
});

module.exports = router;
