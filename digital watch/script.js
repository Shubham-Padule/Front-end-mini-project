let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = hours < 12 ? "AM" : "PM";

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    ampm.innerHTML = period;
}, 1000);

// JavaScript to toggle dark mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if the user has a preference for dark mode
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Store the user's preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Check if the user has a preference for dark mode
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
} else {
    body.classList.remove("dark-mode"); // Default to light mode
}
