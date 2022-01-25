const { Schema, model } = require('mongoose');

const routeSchema = new Schema({
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

const Route = model('Route', routeSchema);

module.exports = Route;
