// Scroll to About Section
document.getElementById("explore-btn").addEventListener("click", function () {
    window.scrollTo({ top: document.querySelector(".about").offsetTop, behavior: "smooth" });
});

// Newsletter Subscription Form Validation
document.getElementById("subscribe-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let message = document.getElementById("subscribe-message");

    if (/\S+@\S+\.\S+/.test(email)) {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
    }
});
