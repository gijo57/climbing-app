const router = require('express').Router();
const Session = require('../models/session');

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const session = await Session.findById(id);
  res.json(session);
});

router.get('/', async (req, res, next) => {
  const sessions = await Session.find({ user: req.user._id });
  res.json(sessions);
});

module.exports = router;
