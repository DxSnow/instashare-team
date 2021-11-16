const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};
  
  if (!Validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = "userName needs to between 2 and 40 characters";
  }

  if (isEmpty(data.username)) {
    errors.userName = "User name is required";
  }

  /*if (!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }

  if (isEmpty(data.email)) {
    errors.email = "email field is required";
  }*/

  return {
    errors,
    isValid: isEmpty(errors),
  };
};