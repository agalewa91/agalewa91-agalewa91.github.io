$(document).ready(function () {
  $(".hamburger").click(function () {
    console.log("cześć");
    $(".main-menu").toggleClass("open");
  });

  $(".main-menu-item a").click(function (e) {
    e.preventDefault();

    $("body").fadeOut(2000, function () {
      window.location.href = $(e.target).attr("href");
    });
  });
});
