const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  if (isEmpty(data.image)) {
    errors.image = "Image field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};