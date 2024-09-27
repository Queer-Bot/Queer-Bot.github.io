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

    <script type="text/javascript">
  (function() {
    emailjs.init("YOUR_USER_ID");  // Initialize EmailJS with your User ID
  })();

  // Function to send email
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting in a traditional way

    // Get the form data
    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };

    // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
      .then(function(response) {
        alert('Email sent successfully!');
      }, function(error) {
        alert('Failed to send email. Error: ' + error);
      });
  });
</script>

});

});
