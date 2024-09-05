// Get the button and set up the initial mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const logo = document.querySelector('#logo');  // Assuming you have a logo element

// Check localStorage for the current mode
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<span class="moon">&#9790;</span> Light Mode';
} else {
    body.classList.remove('dark-mode');
    darkModeToggle.innerHTML = '<span class="sun">&#9728;</span> Dark Mode';
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<span class="moon">&#9790;</span> Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<span class="sun">&#9728;</span> Dark Mode';
    }
});

