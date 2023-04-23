const joi = require("joi");
function userValidation(body) {
  const uservalidationSignup = joi.object({
    FirstName: joi.string().min(2).max(30).trim().required(),
    Name: joi.string().min(2).max(30).trim().required(),
    Email: joi.string().email().trim().required(),
    Password: joi.string().min(8).max(20).required(),
  });

  const uservalidationlogin = joi.object({
    Email: joi.string().email().trim().required(),
    Password: joi.string().min(8).max(20).required(),
  });

  return {
    uservalidationSignup: uservalidationSignup.validate(body),
    uservalidationlogin: uservalidationlogin.validate(body),
  };
}

module.exports = userValidation;
