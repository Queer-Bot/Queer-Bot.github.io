const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode ☀️';
    } else {
        darkModeToggle.textContent = 'Dark Mode 🌑';
    }
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    emailjs.sendForm('service_smp4sw4', 'template_fjf0snb', this)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Message sent successfully!');
        }, function(error) {
           console.log('FAILED...', error);
           alert('Failed to send the message. Please try again.');
        });
});

});
