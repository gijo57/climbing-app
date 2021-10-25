const { Schema, model } = require('mongoose');

const setSchema = new Schema({
  reps: {
    type: Number,
    required: true
  },
  rest: {
    type: Number
  },
  comments: {
    type: String
  }
});

const exerciseSchema = new Schema({
  exercise: {
    type: 'String',
    required: true
  },
  muscleGroups: {
    type: [String],
    required: true
  },
  sets: {
    type: [setSchema],
    required: true
  }
});

const Exercise = model('User', exerciseSchema);

module.exports = Exercise;
