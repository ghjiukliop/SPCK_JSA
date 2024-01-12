document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        const savedEmail = localStorage.getItem('signupEmail');
        const savedPassword = localStorage.getItem('signupPassword');

        if (email === savedEmail && password === savedPassword) {
            alert('Login successful! Redirecting...');
            window.location.href = '/Hưng fixed/index.html'; // Thay đổi thành URL của trang cần chuyển hướng
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });
});

document.getElementById("deleteLocalStorageButton").addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "/signUp/index.html"; // Replace this with your desired redirection URL

});