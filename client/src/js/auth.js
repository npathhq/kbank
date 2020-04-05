import axios from 'axios';


const signup = () => {
  const firstName = document.getElementsByName('firstName')[0].value;
  const lastName = document.getElementsByName('lastName')[0].value;
  const username = document.getElementsByName('username')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log('firstName:', firstName);
  console.log('lastName:', lastName);
  console.log('username:', username);
  console.log('email:', email);
  console.log('password:', password);

  axios.post('http://localhost:3000/users/signup', { firstName, lastName, username, email, password })
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response.data));

  event.preventDefault();
}


const login = () => {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log('email:', email);
  console.log('password:', password);

  axios.post('http://localhost:3000/users/login', { email, password })
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response.data));

  event.preventDefault();
}


module.exports = { login, signup };
