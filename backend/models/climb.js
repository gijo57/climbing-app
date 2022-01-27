const { Schema, model } = require('mongoose');

const climbSchema = new Schema({
  type: {
    type: String,
    enum: ['Boulder', 'Top rope', 'Sport', 'Trad', 'Other']
  },
  gradingSystem: {
    type: String
  },
  grade: {
    type: String
  },
  attempts: {
    type: Number
  },
  ascended: {
    type: Boolean
  },
  ascendType: {
    type: String,
    enum: ['Onsight', 'Flash', 'Repeat', 'Redpoint']
  },
  tags: {
    type: [String]
  },
  notes: {
    type: String,
    maxLength: 500
  },
  images: {
    type: [String]
  },
  location: {
    type: String
  }
});

const Climb = model('Climb', climbSchema);

module.exports = Climb;
