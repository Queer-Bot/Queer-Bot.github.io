// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const modeIcon = document.querySelector('.mode-icon');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<span class="mode-icon">☀️</span> Light Mode';
    } else {
        darkModeToggle.innerHTML = '<span class="mode-icon">🌑</span> Dark Mode';
    }
});
