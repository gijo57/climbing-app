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
  },
  climbs: {
    type: [Schema.Types.ObjectId],
    ref: 'Climb'
  },
  notes: {
    type: String,
    maxLength: 1000
  },
  images: {
    type: [String]
  },
  location: {
    type: String
  }
});

const Session = model('Session', sessionSchema);

module.exports = Session;
