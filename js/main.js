$(document).ready(function () {
  let $btns = $(".project .button-group button");
  $btns.click(function (e) {
    $(".project .button-group button").removeClass("active");
    e.target.classList.add("active");
    let selector = $(e.target).attr("data-filter");
    $(".project .grid").isotope({ filter: selector });
    return false;
  });
  $(".project .button-group #btn1").trigger("click");
  $(".project .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
  // Owl Carousel
  $(".site-main .about-me .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      544: { items: 2 },
    },
  });
  // sticky navigation menu
  let nav_offset_top = $(".header").height() + 50;
  function navbarFixed() {
    if ($(".header").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header .main-menu").addClass("navbar_fixed");
        } else {
          $(".header .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
});
