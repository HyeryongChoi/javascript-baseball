const Validator = {
  isCorrectComposition(input) {
    const NUMBER_REGEXP = /^[1-9]+$/;
    return NUMBER_REGEXP.test(input);
  },

  isAllDifferent(input) {
    const inputSet = new Set(input);
    if (input.length === inputSet.size) return true;
    return false;
  },
};

module.exports = Validator;
