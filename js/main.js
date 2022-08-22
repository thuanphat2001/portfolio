$(document).ready(function () {
  let $btns = $(".project .button-group button");
  $btns.click(function (e) {
    $(".project .button-group button").removeClass("active");
    e.target.classList.add("active");
    let selector = $(e.target).attr("data-filter");
    $(".project .grid").isotope({ filter: selector });
    return false;
  });
});
