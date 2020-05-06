const Joi = require('@hapi/joi');


// Validation schemas
const signup = Joi.object({
  name: Joi.string()
    .pattern(new RegExp('^[a-zA-Z ]+$'))
    .min(2)
    .max(255)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,100}$'))
    .required()
});

const login = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,100}$'))
    .required()
});


// Middleware for validating the request body values
const validateSignup = (req, res, next) => {
  const { error } = signup.validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  next();
}

const validateLogin = (req, res, next) => {
  const { error } = login.validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  next();
}


module.exports = { validateSignup, validateLogin };
