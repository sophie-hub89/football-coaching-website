
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const formMessage = document.getElementById("formMessage");

        if (age > 18) {

            formMessage.textContent =
                "Sorry, coaching is currently available for players up to 18.";

        } else {

            formMessage.textContent =
                "Thanks " + name + "! We'll be in touch about beginner coaching.";

            contactForm.reset();
        }

    });

}
