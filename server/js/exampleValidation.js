const Joi = require('@hapi/joi');


const schema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,100}$'))
    .required()
});


const result = schema.validate({
  email: 'johnsmith@npath.io',
  password: '123456'
});


if (result.error) {
  console.log(result.error.details[0].message);
} else {
  console.log('All is well!');
}
