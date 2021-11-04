const { Schema, model } = require('mongoose');

const programSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  workouts: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Workout' }]
  },
  description: {
    type: String
  }
});

const Program = model('Program', programSchema);

module.exports = Program;
