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
    .then(response => {
      const { accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      console.log('accessToken:', accessToken);

      // console.log('isAuthenticated:', isAuthenticated());
    })
    .catch(error => console.error(error.response.data));

  event.preventDefault();
}


const login = () => {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log('email:', email);
  console.log('password:', password);

  axios.post('http://localhost:3000/users/login', { email, password })
    .then(response => {
      const { accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      console.log('accessToken:', accessToken);
    })
    .catch(error => console.error(error.response.data));

  event.preventDefault();
}


const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const config = { headers: { Authorization: 'Bearer ' + token } };
  axios.post('http://localhost:3000/users/authenticate', null, config)
    .then(response => {
      console.log(response.data);
      return true;
    })
    .catch(error => {
      console.error(error.response.data);
      return false;
    });
}


const logout = () => {
  localStorage.removeItem('token');
  // Redirect to another page
}


module.exports = { login, signup, isAuthenticated, logout };
