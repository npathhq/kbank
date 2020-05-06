import axios from 'axios';


// Form for signup page
const signup = () => {
  const name = document.getElementsByName('name')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log('name:', name);
  console.log('email:', email);
  console.log('password:', password);

  axios.post('https://kbank-backend.now.sh/users/signup', { name, email, password })
    .then(response => {
      const { accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      alert('You have successfully made an account! ✔');
      window.location.pathname = 'login.html';
    })
    .catch(error => {
      console.error(error.response.data);
      alert(error.response.data);
    });

  event.preventDefault();
}


// Form for login page
const login = () => {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log('email:', email);
  console.log('password:', password);

  axios.post('https://kbank-backend.now.sh/users/login', { email, password })
    .then(response => {
      const { accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      alert('You are successfully logged in! ✔');
      window.location.pathname = 'dashboard.html';
    })
    .catch(error => {
      console.error(error.response.data);
      alert(error.response.data);
    });

  event.preventDefault();
}


// Logout of application
const logout = () => {
  localStorage.removeItem('token');
}

let isDashboardPage = window.location.pathname === '/dashboard.html' || window.location.pathname === '/dashboard';
if (isDashboardPage && !localStorage.getItem('token')) {
  alert('You are not authenticated! ❌');
  window.location.pathname = 'login.html';
}

if (!isDashboardPage && localStorage.getItem('token')) window.location.pathname = 'dashboard.html';

module.exports = { login, signup, logout };
