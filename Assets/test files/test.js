AOS.init();

// --------------Mountain Section Cards-------------
setTimeout(() => {
  document.getElementById("section1").classList.remove("opacity-0");
  document.getElementById("section1").setAttribute("data-aos-delay", "500");
}, 0);

setTimeout(() => {
  document.getElementById("section2").classList.remove("opacity-0");
  document.getElementById("section2").setAttribute("data-aos-delay", "1000");
}, 1000);

setTimeout(() => {
  document.getElementById("section3").classList.remove("opacity-0");
  document.getElementById("section3").setAttribute("data-aos-delay", "1500");
}, 1500);

// ----------------Service Section Cards-----------------
setTimeout(() => {
  document.getElementById("service1").classList.remove("opacity-0");
  document.getElementById("service1").setAttribute("data-aos-delay", "500");
}, 0);

setTimeout(() => {
  document.getElementById("service2").classList.remove("opacity-0");
  document.getElementById("service2").setAttribute("data-aos-delay", "1000");
}, 1000);

setTimeout(() => {
  document.getElementById("service3").classList.remove("opacity-0");
  document.getElementById("service3").setAttribute("data-aos-delay", "1500");
}, 1500);

// Image Slide
function slideImage() {
  console.log("image Slide Called");
  const image = document.getElementById("slidingImage");
  const Navbar = document.getElementById("new-test_nav");
  image.style.transform = "translateY(120%) scale(1.4)";
  // Navbar.style.transform = "translateY(120%)";
  // Navbar.style.zIndex = "1000";

  setTimeout(() => {
    if (window.innerWidth < 1500) {
      Navbar.style.transform = "translateY(120%)";
      Navbar.style.zIndex = "1000";
    } else {
      Navbar.style.transform = "translateY(165%)";
      Navbar.style.zIndex = "1000";
    }
  }, 1000);
}
function RemoveslideImage() {
  console.log("Reverse image Slide Called");
  const image = document.getElementById("slidingImage");
  const Navbar = document.getElementById("new-test_nav");
  // image.style.transform = "translateY(-120%)";
  Navbar.style.transform = "translateY(-120%)";

  setTimeout(() => {
    image.style.transform = "translateY(-120%) scale(0.4)";
  }, 500);
}

document.getElementById("fly_nav").addEventListener("click", RemoveslideImage);

let isSlideOpen = false;

function toggleSlide(button) {
  if (isSlideOpen) {
    slideImage();
    button.setAttribute("aria-expanded", "false");
  } else {
    slideImage();
    button.setAttribute("aria-expanded", "true");
  }
  isSlideOpen = !isSlideOpen;
}
// -----------------Navbar-----------------
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};

document.addEventListener("DOMContentLoaded", function () {
  const productButton = document.querySelector(".who-we-button");
  const productMenu = document.querySelector(".who-we-menu");
  // let isImageVisible = false;

  if (productButton && productMenu) {
    productButton.addEventListener("click", function () {
      productMenu.classList.toggle("hidden");
      slideImage();
    });
    // productButton.addEventListener("click", function () {
    //   isImageVisible ? RemoveslideImage() : slideImage();
    //   productMenu.classList.toggle("hidden");
    //   isImageVisible = !isImageVisible; // Toggle state
    // });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !productButton.contains(event.target) &&
        !productMenu.contains(event.target)
      ) {
        productMenu.classList.add("hidden");
        slideImage();
      }
    });
  }
});

// Mobile
document.addEventListener("DOMContentLoaded", function () {
  const productButtonMobile = document.querySelector(".who-we-button-mobile");
  const productMenuMobile = document.querySelector(".who-we-menu-mobile");

  if (productButtonMobile && productMenuMobile) {
    productButtonMobile.addEventListener("click", function () {
      productMenuMobile.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !productButtonMobile.contains(event.target) &&
        !productMenuMobile.contains(event.target)
      ) {
        productMenuMobile.classList.add("hidden");
      }
    });
  }
});

// ------------------Mountain Text Show Hide--------------------
document.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  let textElement = document.getElementById("scrollText");
  let translateY;
  if (window.innerWidth < 768) {
    translateY = Math.min(scrollY * 0.5, 1400);
  } else if (window.innerWidth > 1800) {
    translateY = Math.min(scrollY * 0.7, 1300);
  } else {
    translateY = Math.min(scrollY * 0.7, 1200);
  }
  textElement.style.transform = `translateY(-${translateY}px)`;
});

function toggleDropdown(event, id) {
  event.preventDefault();
  document.getElementById(id).classList.toggle("hidden");
}
