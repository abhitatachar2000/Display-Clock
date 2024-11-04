const clockItem = document.getElementById('clock');
const dateItem = document.getElementById('date');

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatDateString(now) {
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `${day}, ${date} ${month}, ${year}`;
}

function formatTimeString(now) {
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
    const now = new Date();
    dateItem.textContent = formatDateString(now);
    clockItem.textContent = formatTimeString(now);
}

updateClock();
setInterval(updateClock, 1000);
