const { Schema, model } = require('mongoose');
const capitalize = require('../utils/capitalize');

const gradingSystemSchema = new Schema({
  name: {
    type: String,
    required: true,
    set: capitalize
  },
  type: {
    type: String,
    enum: ['Free climbing', 'Bouldering']
  },
  grades: {
    type: [String],
    required: true
  }
});

const GradingSystem = model('GradingSystem', gradingSystemSchema);

module.exports = GradingSystem;
