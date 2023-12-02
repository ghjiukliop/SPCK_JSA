$(document).ready(function(){
    var users = JSON.parse(localStorage.getItem('users')) || [];

    $('#login-form').on('submit', function(e){
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();

        // Check if email is valid. You can add more complex email validation here.
        if (email.includes('@')) {
            // Find the user in the users array.
            var user = users.find(function(user){
                return user.email === email && user.password === password;
            });

            // If a user is found, redirect to other page.
            if (user == user) {
                window.location.href ="/Hưng fixed/index.html";
            } else {
                alert('Incorrect email or password.');
            }
        } else {
            alert('Please enter a valid email address.');
        }
    });
});