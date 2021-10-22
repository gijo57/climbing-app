const router = require('express').Router();
const User = require('../models/user');

router.get('/', async (req, res, next) => {
  const id = req.session.userId;
  const user = await User.findById(id);
  res.json(user);
});

module.exports = router;
