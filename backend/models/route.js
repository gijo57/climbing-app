const { Schema, model } = require('mongoose');

const routeSchema = new Schema({
  type: {
    type: String,
    enum: ['Boulder', 'Top rope', 'Sport', 'Trad', 'Other']
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
  session: {
    type: Schema.Types.ObjectId,
    ref: 'Session',
    required: true
  }
});

const Route = model('Route', routeSchema);

module.exports = Route;
