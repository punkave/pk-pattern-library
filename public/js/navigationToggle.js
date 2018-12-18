$(function () {

  const $body = $('body');
  const toggle = '[data-role=component-toggle]';
  const group = '[data-role=component-group]';

  if (!toggle.length) {
    return;
  }

  $body.on('click', toggle, toggleCode);

  function toggleCode (e) {
    $(this).toggleClass('is-active');
    $(this).next(group).toggleClass('is-active');
  }

});
