const { Schema, model } = require('mongoose');

const measurements = new Schema({
  chest: Number,
  waist: Number,
  hips: Number,
  arms: Number,
  thighs: Number,
  calves: Number,
  forearms: Number
});

const statsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    weight: Number,
    height: Number,
    bodyFat: Number,
    circumference: {
      type: measurements
    }
  },
  { timestamps: true }
);

const Stats = model('Stats', statsSchema);

module.exports = Stats;
