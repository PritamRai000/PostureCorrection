import React from 'react'
import '../../index.css'

const Login = () => {

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Simple email validation
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Validate form before submitting
    form.addEventListener("submit", function(event) {
        let valid = true;
        let errorMessage = "";

        // Check if email is valid
        if (!validateEmail(emailInput.value)) {
            valid = false;
            errorMessage = "Please enter a valid email address.";
        }

        // Check if password is at least 6 characters
        if (passwordInput.value.length < 8) {
            valid = false;
            errorMessage = "Password must be at least 8 characters.";
        }

        // If validation fails, prevent form submission and show alert
        if (!valid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
});


  return (
    <div class="login-container">
    <h1>Login</h1>
    <form action="/login" method="POST" class="login-form">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required/>
        </div>

        <button type="submit" class="login-btn">Login</button>

        <p class="register-link">Don't have an account? <a href="/register">Register here</a></p>
    </form>
</div>
  )
}

export default Login
