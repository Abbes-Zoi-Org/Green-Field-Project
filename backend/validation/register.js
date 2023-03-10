const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.pic = !isEmpty(data.pic) ? data.pic : "";
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field Cannot be Empty";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field Cannot be Empty";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field Cannot be Empty";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field Cannot be Empty";
  }
  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords do not match";
  }
  if (!Validator.equals(data.pic, data.pic)) {
    errors.pic = "Please upload a profile pic";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
