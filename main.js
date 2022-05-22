const countDownDate = new Date('November 04, 2022 00:00:00').getTime(); // End Date
const daysLeft = document.getElementById('daysLeft');
const hoursLeft = document.getElementById('hoursLeft');
const minLeft = document.getElementById('minLeft');
const secLeft = document.getElementById('secLeft');
const x = setInterval(function() {
    const todaysDate = new Date().getTime(); // Todays Date
    let countDown = countDownDate - todaysDate;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    daysLeft.innerHTML = days;
    hoursLeft.innerHTML = hours;
    minLeft.innerHTML = minutes;
    secLeft.innerHTML = seconds;
}, 1000);