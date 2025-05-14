const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const toggleIcon = themeToggle.querySelector('.toggle-icon');
const THEME_KEY = 'preferredTheme';

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        toggleIcon.textContent = '☀️';
        toggleIcon.classList.remove('moon');
        toggleIcon.classList.add('sun');
    } else {
        body.classList.remove('dark-theme');
        toggleIcon.textContent = '🌙';
        toggleIcon.classList.remove('sun');
        toggleIcon.classList.add('moon');
    }
    localStorage.setItem(THEME_KEY, theme);
}

// Function to get the stored theme
function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || 'light'; // Default to light
}

// Apply the stored theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
});

// Function to toggle the theme and trigger animation
function toggleTheme() {
    body.classList.add('animating-theme'); // Add a class for body animation if desired
    themeToggle.classList.add('animate'); // Trigger button animation

    const currentTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
    setTheme(currentTheme);

    // Remove animation classes after the animation duration
    setTimeout(() => {
        body.classList.remove('animating-theme');
        themeToggle.classList.remove('animate');
    }, 500); // Adjust timing to match CSS animation duration
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', toggleTheme);