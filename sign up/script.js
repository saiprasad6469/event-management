document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation
    if (!name || !email || !password) {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
        return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
        return;
    }

    // Password strength check
    if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters long.';
        message.style.color = 'red';
        return;
    }

    // Simulate successful registration
    message.textContent = Thank you for signing up, ${name}!;
    message.style.color = 'green';

    // Optionally, reset form after success
    this.reset();
});