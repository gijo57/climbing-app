const router = require('express').Router();
const Climb = require('../models/climb');

router.get('/', async (req, res, next) => {
  const { type } = req.params;
  const climbs = await Climb.find();

  res.json(climbs);
});

router.post('/', async (req, res, next) => {
  const {
    type,
    gradingSystem,
    grade,
    attempts,
    ascended,
    ascendType,
    tags,
    notes
  } = req.body; //add images and location Google API & Cloudinary API

  const climb = new Climb({
    type,
    gradingSystem,
    grade,
    attempts,
    ascended,
    ascendType,
    tags,
    notes
  });

  const newClimb = await climb.save();
  res.json(newClimb);
});

module.exports = router;
