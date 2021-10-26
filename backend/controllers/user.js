const router = require('express').Router();
const User = require('../models/user');

router.get('/', async (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
