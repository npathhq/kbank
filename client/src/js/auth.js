import axios from 'axios';


console.log('auth.js is loaded...');


const signup = () => {
  const name = document.getElementsByName('name')[0].value;
  const username = document.getElementsByName('username')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log('name:', name);
  console.log('username:', username);
  console.log('email:', email);
  console.log('password:', password);

  axios.post('http://localhost:3000/signup', {
    name: name,
    username: username,
    email: email,
    password: password
  })
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response.data));

  event.preventDefault();
}


const login = () => {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log('email:', email);
  console.log('password:', password);

  axios.post('http://localhost:3000/login', {
    email: email,
    password: password
  })
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response.data));

  event.preventDefault();
}


module.exports = { login, signup };
