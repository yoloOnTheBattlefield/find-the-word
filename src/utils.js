/**
 * Node Constructor
 * @param {String} str
 * @param {Number} step
 */
const Node = function(str, step) {
  this.str = str;
  this.step = step;
};

/**
 * Checks if the letters from a specific index are different
 * @param {String} a
 * @param {String} b
 * @return {Boolean}
 */
const differentByOne = (a, b) => {
  let count = 0;
  const wordLength = a.length;
  for (let i = 0; i < wordLength; i++) {
    if (a[i] != b[i]) {
      count++;
    }
  }
  return count === 1;
};

module.exports = {
  Node,
  differentByOne
};
