const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const schema = require('./js/validate');
const app = express();


// Middleware
app.use(cors());
app.use(express.json());
console.log();


const courses = [];
const users = [
  { email: 'jamesbond@gmail.com', password: '$2b$10$T3sS5pvrb3n1pfUpJfXt6OGHQ.OaN4tQg39sR3hYdIj251nelqYIC' },
  { email: 'johnsmith@gmail.com', password: '123456' },
  { email: 'jonnaquinn@gmail.com', password: 'qwert2' },
  { email: 'bobharpi@gmail.com', password: '49d49526' },
];

// Routes
app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.send(users);
});

app.get('/users', (req, res) => {
  console.log(users);
  res.send(users);
});

app.post('/signup', (req, res) => {

  // Validate the request body values
  const result = schema.signup.validate(req.body);
  if (result.error) {
    console.log(result.error.details[0].message);
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const { email, password } = req.body;

  // Check whether email already exist
  for (const u of users) {
    if (u.email === email) {
      console.log('Email already exist! ❌');
      res.status(400).send('Email already exist! ❌');
      return;
    }
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  // Add to user to database
  users.push({
    email: email,
    password: hashPassword,
  });

  // Respond with success message
  console.log('Signup Successful! ✅');
  res.send('Signup Successful! ✅');

});


app.post('/login', (req, res) => {

  // Validate the request body values
  const result = schema.login.validate(req.body);
  if (result.error) {
    console.log(result.error.details[0].message);
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // Get the hashed password from email
  const { email, password } = req.body;
  let hashPassword = '';
  for (const u of users) {
    if (u.email === email) {
      hashPassword = u.password;
    }
  }

  // Check whether password is the same database
  if (bcrypt.compareSync(password, hashPassword)) {
    console.log('User is authenticated! ✅');
    res.send('User is authenticated! ✅');
  } else {
    console.log('User is not authenticated! ❌');
    res.send('User is not authenticated! ❌');
  }

});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}...`));
