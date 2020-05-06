import axios from 'axios';


// Form for signup page
const signup = () => {
  const name = document.getElementsByName('name')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log('name:', name);
  console.log('email:', email);
  console.log('password:', password);

  axios.post('http://localhost:3000/users/signup', { name, email, password })
    .then(response => {
      const { accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      console.log('accessToken:', accessToken);

      // console.log('isAuthenticated:', isAuthenticated());
    })
    .catch(error => console.error(error.response.data));

  event.preventDefault();
}


// Form for login page
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
