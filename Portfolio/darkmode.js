// darkMode.js
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const body = document.getElementsByTagName("body")[0];
const about = document.getElementById("about");

console.log("body",body)

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  darkModeIcon.src = './images/sun_icon.png'; // Change to sun icon for light mode
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    about.classList.remove("dark");
    body.classList.remove('dark');
    darkModeIcon.src = 'images/moon_icon.png'; // Switch back to moon icon
    localStorage.setItem('theme', 'light'); // Save preference to localStorage
  } else {
    body.classList.add('dark');
    about.classList.add("dark");
    darkModeIcon.src = 'images/sun_icon.png'; // Change to sun icon for dark mode
    localStorage.setItem('theme', 'dark'); // Save preference to localStorage
  }
});
