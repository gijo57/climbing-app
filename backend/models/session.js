const { Schema, model } = require('mongoose');
const validateEmail = require('../utils/validate-email');
const capitalize = require('../utils/capitalize');

const sessionSchema = new Schema({
  startTime: {
    type: Date,
    default: new Date()
  },
  endTime: {
    type: Date
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Session = model('Session', sessionSchema);

module.exports = Session;
