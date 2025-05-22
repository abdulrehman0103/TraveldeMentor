// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(function () {
//     const preloader = document.querySelector(".preloader");
//     if (preloader) {
//       preloader.style.display = "none";
//     }

    // Only apply nav styles on small screens (e.g., width < 768px)
    if (window.innerWidth < 769) {
      const nav = document.querySelector(".ms-navbar");
      const navIcon = document.querySelector(".ms-nav-icon");

      if (nav) nav.style.display = "block"; // or "flex" if needed
      if (navIcon) navIcon.style.display = "flex"; // or "block"
    }

//   }, 2000);
// });




function msbar(){
  var msNavbar = document.querySelector('.ms-navbar');
  msNavbar.style.right="0%";
  msNavbar.style.transition="right .5s ease "; 
  var msNavbar = document.querySelector('.ms-nav-icon');
  msNavbar.style.zIndex="0";


}
function msCross() {
  var msNavbar = document.querySelector('.ms-navbar');
  msNavbar.style.right = "-60%";

  var navIcon = document.querySelector('.ms-nav-icon');
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












document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
  const dropdown = wrapper.querySelector('.customDropdown');
  const dropdownIcon = wrapper.querySelector('.dropdownIcon');
  const searchInput = wrapper.querySelector('.searchInput');
  const selectedFlag = wrapper.querySelector('.selectedFlag');
  const selectedText = wrapper.querySelector('.selectedText');
  const options = wrapper.querySelectorAll('.option');

  // Toggle dropdown on icon click
  dropdownIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    // Hide any other open dropdowns
    document.querySelectorAll('.customDropdown').forEach(d => {
      if (d !== dropdown) d.style.display = 'none';
    });
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Prevent dropdown from closing when clicking inside
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Handle option selection
  options.forEach(option => {
    option.addEventListener('click', () => {
      const flagUrl = option.dataset.flag;
      const countryName = option.textContent.trim();

      selectedFlag.src = flagUrl;
      selectedFlag.style.display = 'inline';
      selectedText.innerText = countryName;

      dropdown.style.display = 'none';
    });
  });

  // Filter options
  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    options.forEach(option => {
      const text = option.textContent.toLowerCase();
      option.style.display = text.includes(filter) ? 'block' : 'none';
    });
  });
});

// Close any dropdown when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.customDropdown').forEach(dropdown => {
    dropdown.style.display = 'none';
  });
});

 $(document).ready(function () {
  const detailDivs = $(".services-detail-div");
  const visaDivs = $(".business-visa-div");

  function resetVisaStyles() {
    visaDivs.css({
      "background-color": "",
      "box-shadow": "",
    });

    visaDivs.find(".business-visa-icon-div img").each(function () {
      const src = $(this).attr("src").replace("-light-golden", "-blue");
      $(this).attr("src", src);
    });

    visaDivs.find(".business-visa-name-div").css("color", "#c59c3d");
    visaDivs.find(".business-visa-view-detail-div").css("color", "#c59c3d");

    visaDivs.find(".business-visa-view-detail-div img").each(function () {
      const src = $(this).attr("src").replace("-light-golden", "-blue");
      $(this).attr("src", src);
    });

    detailDivs.removeClass("active zoom-in").addClass("zoom-out").hide();
  }

  visaDivs.each(function (index) {
    $(this).on("mouseenter", function () {
      resetVisaStyles();

      $(this).css({
        "background-color": "#2f345b",
        "box-shadow": "0 0 4px 1px #f2cd74",
      });

      $(this)
        .find(".business-visa-icon-div img")
        .each(function () {
          const src = $(this).attr("src").replace("-blue", "-light-golden");
          $(this).attr("src", src);
        });

      $(this).find(".business-visa-name-div").css("color", "white");
      $(this).find(".business-visa-view-detail-div").css("color", "#f2cd74");

      $(this)
        .find(".business-visa-view-detail-div img")
        .each(function () {
          const src = $(this).attr("src").replace("-blue", "-light-golden");
          $(this).attr("src", src);
        });

      $(this).addClass("zoom-in").removeClass("zoom-out");

      const currentDetail = detailDivs.eq(index);
      currentDetail.removeClass("zoom-out").addClass("zoom-in active").show();
    });

    $(this).on("mouseleave", function () {
      $(this).removeClass("zoom-in").addClass("zoom-out");
      resetVisaStyles();
    });
  });
});




  $(document).ready(function () {
  $(".business-visa-div-sm").click(function (e) {
    e.stopPropagation(); // Prevent bubbling up to document

    let $parentBox = $(this).closest(".business-visa-heading-detail-box-sm");
    let isActive = $parentBox.hasClass("active");

    // Reset all boxes
    $(".business-visa-heading-detail-box-sm").removeClass("active").css("height", "5rem");
    $(".business-visa-div-sm").css({
      height: "80%",
      backgroundColor: "",
    });
    $(".business-visa-icon-div-sm img").each(function () {
      // Reset icons (replace with default blue icons)
      let src = $(this).attr("src");
      if (src.includes("light-golden")) {
        $(this).attr("src", src.replace("light-golden", "blue"));
      }
    });
    $(".business-visa-name-div-sm p").css("color", "#c59c3d");
    $(".business-visa-view-detail-div-sm p").css("color", "#c59c3d");
    $(".business-visa-view-detail-div-sm img").each(function () {
      let src = $(this).attr("src");
      if (src.includes("light-golden")) {
        $(this).attr("src", src.replace("light-golden", "blue"));
      }
    });
    $(".services-detail-div-sm").removeClass("active").slideUp();

    // If already active, don't expand again
    if (!isActive) {
      // Expand current box
      $parentBox.addClass("active").css("height", "30rem");
      $(this).css({
        height: "15%",
        backgroundColor: "#2f345b",
      });

      // Change icon
      let $iconImg = $(this).find(".business-visa-icon-div-sm img");
      let src = $iconImg.attr("src");
      if (src.includes("blue")) {
        $iconImg.attr("src", src.replace("blue", "light-golden"));
      }

      // Change text colors
      $(this).find(".business-visa-name-div-sm p").css("color", "white");
      $(this).find(".business-visa-view-detail-div-sm p").css("color", "white");

      // Change arrow icon
      let $arrowImg = $(this).find(".business-visa-view-detail-div-sm img");
      let arrowSrc = $arrowImg.attr("src");
      if (arrowSrc.includes("blue")) {
        $arrowImg.attr("src", arrowSrc.replace("blue", "light-golden"));
      }

      // Show details section
      $parentBox.find(".services-detail-div-sm").addClass("active").slideDown();
    }
  });

  // Click outside to close
  $(document).click(function (e) {
    if (!$(e.target).closest(".business-visa-heading-detail-box-sm").length) {
      $(".business-visa-heading-detail-box-sm").removeClass("active").css("height", "5rem");
      $(".business-visa-div-sm").css({
        height: "80%",
        backgroundColor: "",
      });
      $(".business-visa-icon-div-sm img").each(function () {
        let src = $(this).attr("src");
        if (src.includes("light-golden")) {
          $(this).attr("src", src.replace("light-golden", "blue"));
        }
      });
      $(".business-visa-name-div-sm p").css("color", "#c59c3d");
      $(".business-visa-view-detail-div-sm p").css("color", "#c59c3d");
      $(".business-visa-view-detail-div-sm img").each(function () {
        let src = $(this).attr("src");
        if (src.includes("light-golden")) {
          $(this).attr("src", src.replace("light-golden", "blue"));
        }
      });
      $(".services-detail-div-sm").removeClass("active").slideUp();
    }
  });
});