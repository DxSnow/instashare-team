const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){

    let errors = {}; //to collect errors

    //check email
    
    if(!Validator.isEmail(data.email)){
        errors.email = 'Please put in a valid email';
    }
    if(isEmpty(data.email)){
      errors.email = 'Email field is required';
    }

    //check password
    if(!Validator.isLength(data.password, {min:8, Max:30})){
        errors.password = 'Password must be between 8 and 30 characters';
    }
    if(isEmpty(data.password)){
      errors.password = 'password field is required';
  }

    return {
      errors,
      isValid: isEmpty(errors)//^^true or false;for easier check externally.
    };
}