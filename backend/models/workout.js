const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
  program: {
    type: Schema.Types.ObjectId,
    ref: 'Program'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: Date
  },
  endTime: {
    type: Date
  },
  duration: {},
  exercises: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  }
});

const Workout = model('User', workoutSchema);

module.exports = Workout;
