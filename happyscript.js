// JavaScript code can be added to manipulate the webpage dynamically
// For example, you could add animation effects, countdowns, etc.
// Here's a simple example that changes the text color of the birthday wish every second

const birthdayWish = document.getElementById('birthday-wish');
const colors = ['#ff6600', '#cc33ff', '#3399ff', '#ff3399', '#33cc33'];
let index = 0;

setInterval(() => {
  birthdayWish.style.color = colors[index];
  index = (index + 1) % colors.length;
}, 1000);
