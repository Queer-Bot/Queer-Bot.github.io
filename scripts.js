document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
        this.innerHTML = '&#9728; Light Mode';
    } else {
        this.textContent = 'Dark Mode';
        this.innerHTML = '&#9790; Dark Mode';
    }
});
