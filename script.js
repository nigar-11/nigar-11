const predefinedCredentials = {
    username: '2028065@kiit.ac.in',
    password: 'admin'
};

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === predefinedCredentials.username && password === predefinedCredentials.password) {
        // Redirect to the game page or do whatever action you want here.
        window.location.href = 'map/copy.html';
    } else {
        alert('Invalid username or password.');
    }
});