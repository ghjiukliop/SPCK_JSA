const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;

      localStorage.setItem('signupEmail', email);
      localStorage.setItem('signupPassword', password);

      alert('Sign-up successful! Redirecting...');
      window.location.href = '/login/login.html'; // Thay đổi thành URL của trang cần chuyển hướng
    });