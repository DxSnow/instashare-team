const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};
  
  if (!Validator.isLength(data.userName, { min: 2, max: 40 })) {
    errors.userName = "userName needs to between 2 and 40 characters";
  }

  if (isEmpty(data.userName)) {
    errors.userName = "User name is required";
  }

  if (!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }

  if (isEmpty(data.email)) {
    errors.email = "email field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};