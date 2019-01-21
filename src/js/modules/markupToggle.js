const toggle = '[data-role=markup-toggle]';

export default {
  init
};

function init () {
  if (!document.querySelectorAll(toggle).length) {
    return false;
  } else {
    return bindEvents();
  }
};

function bindEvents () {
  document.querySelectorAll(toggle).forEach(function (value) {
    value.addEventListener('click', toggleCode);
  });
}

function toggleCode (e) {
  e.target.classList.toggle('is-active');
  e.target.previousElementSibling.classList.toggle('is-active');
}
