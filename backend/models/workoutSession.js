const { Schema, model } = require('mongoose');

const workoutSessionSchema = new Schema({
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
  exercises: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  }
});

const WorkoutSession = model('WorkoutSession', workoutSessionSchema);

module.exports = WorkoutSession;
