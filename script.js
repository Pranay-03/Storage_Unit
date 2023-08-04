document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Replace these with your actual predefined username and password
        const predefinedUsername = "Pranay";
        const predefinedPassword = "Pranay";
        
        if (username === predefinedUsername && password === predefinedPassword) {
            //alert("Login successful!");
            // Redirect to the web app after successful login
            window.location.href = "view.html"; // Replace with your web app's URL
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });
});
