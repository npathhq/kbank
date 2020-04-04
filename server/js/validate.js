const Joi = require('@hapi/joi');

// Validate the request body values
const signup = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,100}$'))
    .required()
});

// Validate the request body values
const login = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,100}$'))
    .required()
});


module.exports = { signup, login };
