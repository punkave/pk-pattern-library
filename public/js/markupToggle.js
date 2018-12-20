$(function () {

  const $body = $('body');
  const toggle = '[data-role=markup-toggle]';
  const markup = '[data-role=markup-container]';

  if (!toggle.length) {
    return;
  }

  $body.on('click', toggle, toggleCode);

  function toggleCode () {
    $(this).toggleClass('is-active');
    $(this).prev(markup).toggleClass('is-active');
  }

});
