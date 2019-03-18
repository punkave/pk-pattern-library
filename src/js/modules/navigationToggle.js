const toggle = '[data-role=component-toggle]';
const navToggle = '[data-role=nav-toggle]';
const container = '[data-role=container]';

export default {
  init
};

function init () {
  if (!document.querySelectorAll(navToggle).length) {
    return false;
  } else {
    return bindEvents();
  }
};

function bindEvents () {
  document.querySelectorAll(toggle).forEach(function (value) {
    value.addEventListener('click', toggleCode);
  });
  document.querySelector(navToggle).addEventListener('click', toggleNav);
}

function toggleCode (e) {
  e.target.classList.toggle('is-active');
  e.target.nextElementSibling.classList.toggle('is-active');
}

function toggleNav (e) {
  document.querySelector(container).classList.toggle('nav-is-hidden');
}
