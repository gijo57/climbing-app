const router = require('express').Router();
const User = require('../models/user');

router.get('/', async (req, res, next) => {
  res.json(req.user);
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;

  User.findByIdAndUpdate(id, {});
});

module.exports = router;
