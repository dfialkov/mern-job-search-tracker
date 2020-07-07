const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateNewappInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
// Non-required empty fields don't need to be checked for emptiness
  data.userEmail = !isEmpty(data.userEmail) ? data.userEmail: "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.appStatus = !isEmpty(data.appStatus) ? data.appStatus : "";
// Salary should be converted to a number if possible. Non-empty numbers are handled elsewhere
  data.salary = isNaN(data.salary) ? data.salary : Number(data.salary);

  


// Email checks
  if (Validator.isEmpty(data.userEmail)) {
    errors.email = "Failed to fetch user email";
  } else if (!Validator.isEmail(data.userEmail)) {
    errors.userEmail = "User email is invalid.";
  }
  if (Validator.isEmpty(data.company)){
    errors.company = "Company name is required";
  }
  if (Validator.isEmpty(data.appStatus)){
    errors.appStatus = "Application status is required";
  }
  else if(data.appStatus != "Application" && data.appStatus != "Phone Screen" && data.appStatus != "Onsite" && data.appStatus != "Offer" ){
    errors.appStatus = "Invalid application status"
  }
  if(!isEmpty(data.salary) && isNaN(data.salary)){
    errors.salary = "Salary must be either empty or a number"
  }

return {
    errors,
    isValid: isEmpty(errors)
  };

};
