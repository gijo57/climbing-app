module.exports = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    const error = new Error('NOT_AUTHENTICATED');
    error.status = 401;
    next(error);
  }
};
