
const countDownDate = new Date('November 04, 2022 00:00:00').getTime(); // End Date
const daysLeft = document.getElementById('daysLeft');
const hoursLeft = document.getElementById('hoursLeft');
const minLeft = document.getElementById('minLeft');
const secLeft = document.getElementById('secLeft');
const x = setInterval(function () {
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

const dropDown = document.getElementById('dropDown');
const dropDownText = document.getElementById('dropDownText');
const packageModal = document.getElementById('packageModal');
const selectArrow = document.getElementById('selectArrow');

function toggleArrow() {
  selectArrow.classList.toggle('select__dropdown-arrow--rotate');
}

dropDown.addEventListener('click', () => {
  packageModal.classList.toggle('package-modal--expanded');
  toggleArrow();
})

const selections = '[data-selected]';
const selected = document.querySelectorAll(selections);

for (const elm of selected) {
  elm.addEventListener('click', function() {
    const modalId = this.dataset.selected;
    const inner = document.getElementById(modalId).innerText;
    dropDownText.innerText = inner;
    dropDownText.style.color = '#5274ff';
    packageModal.classList.remove('package-modal--expanded');
    toggleArrow();
  })
}

const form = document.getElementById('form');
const email = document.getElementById('email');
const regX = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;

email.addEventListener('keyup', (e) => {
  if (email.value.match(regX)) {
    email.classList.remove('email-err');
    email.classList.add('email-success');
  } else {
    email.classList.add('email-err');
    email.placeholder = 'larry@gmail.com';
    e.preventDefault()
  }
})

form.addEventListener('submit', (e) => {
  if(!email.value.match(regX)) {
    e.preventDefault();
  }
})

