const capitalize = (words) => {
  return words
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

module.exports = capitalize;
