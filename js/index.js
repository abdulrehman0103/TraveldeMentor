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


const cards = [
  {
    img: "./Pictures/Business Visa.png",
    heading: "BUSINESS VISA",
    detail:
      "Whether to attend a Business Meeting or to participate in an International Exhibition, We ensure you meet all requirements.",
  },
  {
    img: "./Pictures/Tourist Visa.png",
    heading: "TOURIST VISA",
    detail:
      "Ready to explore new Destinations? Let us handle the paper work and logistics of securing your tourist visa so you can focus on creating unforgettable travel memories.",
  },
  {
    img: "./Pictures/family Friend Visit post.jpg",
    heading: "Family/Friend Visit",
    detail:
      "Reuniting with family members is Priceless. We will assist You in obtaining the necessary visa for your family or friend’s visit, making the journey to see your loved ones stress-free.",
  },
  {
    img: "./Pictures/Visa Appeal Services post.jpg",
    heading: "Visa Appeal Services",
    detail:
      "Our Expert Team Provides Personalized Support By Meticulously Reviewing Each Case and Crafting Strategic Appeal Arguments. ",
  },
  {
    img: "./Pictures/E-Visa post.jpg",
    heading: "E-Visa",
    detail:
      "An E-visa is a digital visa that lets you apply online, saving time and ef ort. Countries like Thailand, Malaysia  and Baku E-visasfor Pakistani travelers, making travel simple and convenient!",
  },
];

let currentIndex = 0;
let autoSlideInterval;

const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");
const servicesLeft = document.querySelector(".services-left");
const servicesRight = document.querySelector(".services-right");

function updateCards() {
  // 🌟 First reset left card background and text color
  const leftCardTextBox = document.querySelector(
    ".services-left .services-text-box"
  );
  const leftCardDetail = document.querySelector(
    ".services-left .services-detail"
  );

  if (leftCardDetail) {
    leftCardDetail.style.color = "white"; // reset text color
  }

  // (your existing code for updating images and text)
  let leftCardIndex = currentIndex;
  let rightCardIndex = (currentIndex + 1) % cards.length;

  const leftCard = cards[leftCardIndex];
  const rightCard = cards[rightCardIndex];

  servicesLeft.querySelector(".services-img").src = leftCard.img;
  servicesLeft.querySelector(".services-heading").textContent =
    leftCard.heading;
  servicesLeft.querySelector(".services-detail").textContent = leftCard.detail;

  servicesRight.querySelector(".services-img").src = rightCard.img;
  servicesRight.querySelector(".services-heading").textContent =
    rightCard.heading;
  servicesRight.querySelector(".services-detail").textContent =
    rightCard.detail;

  updateDots();
  // animateBackgroundChange(); // 🌟 Apply new background + text color
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCards();
  resetAutoSlide();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCards();
  resetAutoSlide();
});

// Select all your existing dots
const dots = document.querySelectorAll(".services-dots .dot-1");

// Add click event listeners to each dot
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCards();
    resetAutoSlide();
  });
});

// Update dot active state
function updateDots() {
  const allDots = document.querySelectorAll(".services-dots .dot-1");
  allDots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Auto Slide Function
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  }, 5000); // every 5 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize
updateCards();
startAutoSlide();
