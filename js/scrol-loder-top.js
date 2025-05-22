document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
  
    }, 5000);
  });




window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("scroll-progress-bar").style.height =
      scrollPercent + "%";
  });


  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks the button, scroll to the top of the document
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  AOS.init({
    duration: 600, // animation duration
    once: false     // animate only once
  });