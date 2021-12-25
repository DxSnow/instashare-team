const Validator = require("validator");
const isEmpty = require("./is-empty");


module.exports = function validateProfileInput(data) {
  let errors = {};

  if (!Validator.isLength(data.name, { min: 0, max: 20 })) {
    errors.name = "Name needs to between 2 and 20 characters";
  }

  if (!Validator.isLength(data.bio, { min: 0, max: 40 })) {
    errors.bio = "Bio needs to between 0 and 40 characters";
  }
  if (!Validator.isLength(data.website, { min: 0, max: 30 })) {
    errors.website = "Website needs to be less than 30 characters";
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
};
