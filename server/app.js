const express = require('express');
const cors = require('cors');
const app = express();
const schema = require('./js/validate');


// Middleware
app.use(cors());
app.use(express.json());
console.log();


const courses = [];
const users = [
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

  // Add to user to database
  users.push({
    email: email,
    password: password,
  });

  // Respond with success message
  console.log('Signup Successful! ✅');
  res.send('Signup Successful! ✅');

});


app.post('login', (req, res) => {
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}...`));
