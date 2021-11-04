const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  program: {
    type: Schema.Types.ObjectId,
    ref: 'Program'
  },
  exercises: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  }
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
