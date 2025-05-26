if (window.innerWidth < 769) {
  const nav = document.querySelector(".ms-navbar");
  const navIcon = document.querySelector(".ms-nav-icon");

  if (nav) nav.style.display = "block"; // or "flex" if needed
  if (navIcon) navIcon.style.display = "flex"; // or "block"
}
function msbar() {
  var msNavbar = document.querySelector(".ms-navbar");
  msNavbar.style.right = "0%";
  msNavbar.style.transition = "right .5s ease ";
  var msNavbar = document.querySelector(".ms-nav-icon");
  msNavbar.style.zIndex = "0";
}
function msCross() {
  var msNavbar = document.querySelector(".ms-navbar");
  msNavbar.style.right = "-60%";

  var navIcon = document.querySelector(".ms-nav-icon");
  navIcon.style.transition = "right .5s ease";

  // Delay z-index change
  setTimeout(function () {
    navIcon.style.zIndex = "99999";
  }, 500); // 500ms to match transition
}
$(document).ready(function () {
  // When nav icon is clicked
  $(".ms-nav-icon").on("click", function () {
    $(".sm-nav-main-div").css("z-index", "99999");
    $(".sm-nav-main-div").css("backdropFilter", "blur(3px)");
    $(".sm-nav-main-div").css("background-color", " #2f345b54");
    msbar(); // Call the existing function
  });

  // Override the msCross function with jQuery addition
  window.msCross = function () {
    $(".ms-navbar").css("right", "-60%");
    $(".ms-nav-icon").css("transition", "right .5s ease");

    // Delay resetting z-index of parent after closing
    setTimeout(function () {
      $(".sm-nav-main-div").css("z-index", "0");
      $(".ms-nav-icon").css("z-index", "99999");
      $(".sm-nav-main-div").css("backdropFilter", "");
      $(".sm-nav-main-div").css("background-color", "");
    }, 500); // Match the transition time
  };
});