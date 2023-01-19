const Validator = require("validator");
const isEmpty = require("isEmpty");

module.exports = function validateRegisterInput(data){
let errors = {};
};

data.name = !isEmpty(data.name) ? data.name : "";
data.email = !isEmpty(data.email) ? data.email : "";
data.password = !isEmpty(data.password) ? data.password : "";

if(Validator.isEmpty(data.name)){
  errors.name = "Name cannot be Empty";
};

if(Validator.isEmpty(data.email)){
  errors.email = "Email cannot be Empty";
} else if (!Validator.isEmail(data.email)) {
  errors.email = "Email is Invalid";
};

if(Validator.isEmpty(data.password)){
  errors.password = "Password cannot be Empty";
};

