

document.addEventListener("DOMContentLoaded", function (e) {
  document.body.className = '';
});


$('.collapse-button').click(function () {
  $(this).toggleClass('open');
  $('header').toggleClass('open', 300, "swing");
});
