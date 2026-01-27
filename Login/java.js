// Get both forms
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Function to switch between Login and Signup
function toggleForm() {
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

// Login form submit
// Login form submit
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // demo login success
    alert("Login successful");

    // redirect to home page
    window.location.href = "home.html";
});


// Signup form submit
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const passwords = signupForm.querySelectorAll("input[type='password']");

    if (passwords[0].value !== passwords[1].value) {
        alert("Passwords do not match!");
    } else {
        alert("Signup successful");
        window.location.href = "home.html";
    }
});
