// Toggle menu for mobile navigation
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}

// Function to send mail using emailjs
function sendMail(event) {
    event.preventDefault();  // Prevent form reload

    const fromName = document.getElementById("from_name")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const fromEmail = document.getElementById("from_email")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const params = {
        from_name: fromName,
        phone: phone,
        from_email: fromEmail,
        message: message,
    };

    console.log("Sending message with params:", params);

    emailjs.send("service_59i36zk", "template_o92p3ku", params)
        .then(function (res) {
            console.log("Success response:", res);
            alert("Message sent successfully!");

            // Reset the form fields after successful send
            const form = document.getElementById("contact-form");
            if (form) {
                form.reset();
            }
        })
        .catch(function (err) {
            console.error("Failed to send message ", err);
            alert("Something went wrong. Try again later.");
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", sendMail);
    }

    const contactBtn = document.getElementById("contact-btn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            window.location.href = "contact.html";
        });
    }
});

