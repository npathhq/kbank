const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const schema = require('../js/validate');
const users = require('../db/users.json');


// Routes
router.get('/', (req, res) => {
  res.send(users);
});


router.post('/signup', (req, res) => {
  // Validate the request body values
  const { error } = schema.signup.validate(req.body);
  if (error) {
    console.log(error.details[0].message);
    res.status(400).send(error.details[0].message);
    return;
  }

  // Destructure the request body object
  const { name, username, email, password } = req.body;

  // Check whether email already exist
  for (const u of users) {
    if (u.email === email) {
      console.log('Email already exist! ❌');
      res.status(400).send('Email already exist! ❌');
      return;
    }
  }

  // Encrypt the password
  const hashPassword = bcrypt.hashSync(password, 10);

  // Add to user to database
  users.push({
    name: name,
    username: username,
    email: email,
    password: hashPassword,
  });

  // Respond with success message
  console.log('Signup Successful! ✅');
  res.send('Signup Successful! ✅');
});


router.post('/login', (req, res) => {
  // Validate the request body values
  const { error } = schema.login.validate(req.body);
  if (error) {
    console.log(error.details[0].message);
    res.status(400).send(error.details[0].message);
    return;
  }

  // Destructure the request body object
  const { email, password } = req.body;

  // Get the hashed password from database
  let hashPassword = '';
  for (const u of users) {
    if (u.email === email) {
      hashPassword = u.password;
    }
  }

  // Check whether password is the same in database
  if (bcrypt.compareSync(password, hashPassword)) {
    console.log('User is authenticated! ✅');
    res.send('User is authenticated! ✅');
  } else {
    console.log('User is not authenticated! ❌');
    res.send('User is not authenticated! ❌');
  }
});

module.exports = router;
