// Check if the user is logged in as admin
if (!localStorage.getItem('isAdmin')) {
    alert('You must log in as admin to access this page.');
    window.location.href = 'index.html'; // Redirect to the login page
}// Handle Admin login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminUsername && password === adminPassword) {
        localStorage.setItem('isAdmin', 'true');
        alert('Logged in successfully as Admin!');
        window.location.href = 'admin-panel.html'; // Redirect to admin panel
    } else {
        document.getElementById('loginMessage').style.display = 'block';
    }
});