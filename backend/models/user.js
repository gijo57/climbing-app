const { Schema, model } = require('mongoose');
const validateEmail = require('../utils/email-validator');
const capitalize = require('../utils/capitalize');

const userSchema = new Schema({
  firstName: {
    type: String,
    set: capitalize,
    required: true
  },
  lastName: {
    type: String,
    set: capitalize,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateEmail,
      message: 'Please enter a valid email address.'
    }
  },
  profilePicture: {
    type: String
  }
});

const User = model('User', userSchema);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.passwordHash;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = User;
