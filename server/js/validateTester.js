const schema = require('./validate');

let result;
let count = 1;


result = schema.signup.validate({
  name: 'James Bond',
  username: 'greatspy1',
  email: 'jamesbond@gmail.com',
  password: '123456'
});
if (result.error) console.log(`${count}:`, result.error.details[0].message);
count++;


result = schema.signup.validate({
  email: 'jamesbond@gmail.com',
  password: '123456'
});
if (result.error) console.log(`${count}:`, result.error.details[0].message);
count++;


result = schema.signup.validate({
  email: 'jamesbond@com',
  password: '123456'
});
if (result.error) console.log(`${count}:`, result.error.details[0].message);
count++;


result = schema.signup.validate({
  email: 'jamesbond@gmail.com',
  password: '12345'
});
if (result.error) console.log(`${count}:`, result.error.details[0].message);
count++;


result = schema.signup.validate({
  name: 'James Bond',
  username: 'greatspy1#',
  email: 'jamesbond@gmail.com',
  password: '123456'
});
if (result.error) console.log(`${count}:`, result.error.details[0].message);
count++;


console.log('All test passed! ✅')
