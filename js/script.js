$(function() {
  if(location.protocol == 'http:') {
    location.replace(location.href.replace(/http:/, 'https:'));
  }
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.carousel').carousel();
  $('.collapsible').collapsible();
  $('.fixed-action-btn').floatingActionButton();
  $(".modal-original").fadeIn(1000);

  // 閉じる
  $(".modal-original").on("click", function() {
    $(this).fadeOut(1000);
  });

  $.getJSON("./js/quote.json", function(data) {

    quotelen = Object.keys(data).length;
    rand = Math.floor(Math.random() * Number(quotelen))

    var Objhp = $(".honbun");
    var Objsp = $(".sakuhin_name");

    Objhp.html(data[rand].message);
    Objsp.html(data[rand].sakuhin);
  });
});
