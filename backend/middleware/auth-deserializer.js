const User = require('../models/user');

module.exports = async (req, res, next) => {
  const userId = req.session.userId;
  if (userId) {
    try {
      const user = await User.findById(userId);
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
};
