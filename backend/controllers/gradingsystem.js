const router = require('express').Router();
const GradingSystem = require('../models/gradingsystem');

router.get('/:type', async (req, res, next) => {
  const { type } = req.params;
  const gradingSystems = await GradingSystem.find({ type });

  res.json(gradingSystems);
});

module.exports = router;
