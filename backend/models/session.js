const { Schema, model } = require('mongoose');

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
