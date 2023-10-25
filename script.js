const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const dashboard = document.getElementById('dashboard');
const usernameDisplay = document.getElementById('username');
const moneyDisplay = document.getElementById('money');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    // Perform authentication (e.g., check username and password against a database)
    // For simplicity, let's assume the username is "admin" and the password is "password"
    if (username === 'admin' && password === 'password') {
      // Redirect to the dashboard
      window.location.href = `dashboard.html/${username}/${password}`;
    } else {
      alert('Invalid username or password');
    }
  });