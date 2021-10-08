const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log(`Database connected to URI "${MONGODB_URI}"`))
    .catch((error) =>
      console.error(
        `There was an error connecting the database to URI "${MONGODB_URI}"`
      )
    );
};
