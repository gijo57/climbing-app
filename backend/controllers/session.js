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

router.post('/', async (req, res, next) => {
  const { startTime, endTime, routes, notes, images, location } = req.body;
  const user = req.user;

  const session = new Session({
    startTime,
    endTime,
    user,
    routes,
    notes,
    images,
    location
  });

  try {
    const newSession = await session.save();
    res.json(newSession);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
