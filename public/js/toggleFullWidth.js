$(function () {

  const $body = $('body');
  const toggle = '[data-role=full-width-toggle]';
  const container = '[data-role=full-width-container]';
  const inner = '[data-role=full-width-inner]';
  const returnToggle = '[data-role=full-width-return]';
  const pkpl = '[data-role=container]';

  if (!toggle.length) {
    return;
  }

  $body.on('click', toggle, toggleCode);
  $body.on('click', returnToggle, returnScreen);

  function toggleCode (e) {
    const slug = $body.find('[data-role=container]').data().slug;
    var component = $(this).data().component;
    if (component) {
      $.ajax({
          url: slug + '/' + component,
          method: "GET",
          dataType: "html",
          success: function (data) {
            $body.find(inner).empty();
            $body.find(inner).append(data);
            $body.find(pkpl).toggleClass('is-hidden');
            $body.find(container).toggleClass('is-active');
          }
        }
      );
    }
  }

  function returnScreen (e) {
    $body.find(pkpl).removeClass('is-hidden');
    $body.find(container).removeClass('is-active');
  }
});
