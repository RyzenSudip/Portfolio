document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate form submission (replace with your actual form handling)
        setTimeout(() => {
            formResponse.innerHTML = `<p>Thank you, ${data.name}! Your message has been sent.</p>`;
            form.reset(); // Reset the form fields
        }, 500);
    });
});
