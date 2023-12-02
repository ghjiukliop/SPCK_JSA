document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting normally
     
    // get the email and password from the form
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;
     
    // save the email and password to local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
     
    // navigate to another page
    window.location.href = "/login/login.html";
   });