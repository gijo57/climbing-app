const router = require('express').Router();
const User = require('../models/user');

router.get('/', async (req, res, next) => {
  res.json(req.user);
});

router.put('/edit', async (req, res, next) => {
  const { username, firstName, lastName, email } = req.body;
  const { id } = req.user;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { username, firstName, lastName, email },
    { new: true }
  );

  res.json(updatedUser);
});

module.exports = router;
