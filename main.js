
const countDownDate = new Date('January 01, 2024 00:00:00').getTime(); // End Date
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

const toggleArrow = () => {
  selectArrow.classList.toggle('select-dropdown__arrow--rotate');
}

dropDown.addEventListener('click', () => {
  packageModal.classList.toggle('package-modal--expanded');
  toggleArrow();
});

const selections = '[data-selected]';
const selected = document.querySelectorAll(selections);
const basic = document.getElementById('basicImg');
const pro = document.getElementById('proImg');
const ult = document.getElementById('ultimateImg');

for (const elm of selected) {
  elm.addEventListener('click', function () {
    const modalId = this.dataset.selected;
    const modalImg = document.getElementById(modalId).firstElementChild;
    const inner = document.getElementById(modalId).innerText;
    modalImg.classList.add('modal-option__img--show');
    dropDownText.innerText = inner;
    dropDownText.style.color = '#5274ff';

    if (modalImg.classList.contains('basic')) {
      pro.classList.remove('modal-option__img--show');
      ult.classList.remove('modal-option__img--show');

    } else if (modalImg.classList.contains('pro')) {
      basic.classList.remove('modal-option__img--show');
      ult.classList.remove('modal-option__img--show');

    } else if (modalImg.classList.contains('ultimate')) {
      pro.classList.remove('modal-option__img--show');
      basic.classList.remove('modal-option__img--show');
    }
  });
}

const form = document.getElementById('form');
const email = document.getElementById('email');
const emailErr = document.getElementById('emailErr');
const emailCheck = document.getElementById('emailCheck');
const regX = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;

const addErr = () => {
  email.classList.add('email-err');
  emailErr.classList.add('email__img--show');
  email.placeholder = 'larry@gmail.com';
}

const removeErr = () => {
  email.classList.remove('email-err');
  emailErr.classList.remove('email__img--show');
}

const addSuccess = () => {
  email.classList.add('email-success');
  emailCheck.classList.add('email__img--show');
}

const removeSuccess = () => {
  emailCheck.classList.remove('email__img--show');
  email.classList.remove('email-success');
}

email.addEventListener('keyup', () => {
  if (email.value.match(regX)) {
    addSuccess();
    removeErr();
  } else {
    addErr();
    removeSuccess();
  }
});

form.addEventListener('submit', (e) => {
  if (email.value === '' || !email.value.match(regX)) {
    addErr();
    e.preventDefault();
  }
});



