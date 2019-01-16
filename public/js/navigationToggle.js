$(function () {

  console.log('hello');

  const $body = $('body');
  const toggle = '[data-role=component-toggle]';
  const group = '[data-role=component-group]';
  const navToggle = '[data-role=nav-toggle]';
  const container = '[data-role=container]';

  if (!toggle.length || !navToggle.length) {
    return;
  }

  $body.on('click', toggle, toggleCode);
  $body.on('click', navToggle, toggleNav);

  function toggleCode (e) {
    $(this).toggleClass('is-active');
    $(this).next(group).toggleClass('is-active');
  }

  function toggleNav (e) {
    console.log('hi');
    $(container).toggleClass('nav-is-hidden');
  }

});
