AOS.init();

window.addEventListener("scroll", () => {
  AOS.refresh();
});

document.getElementById("menu-toggle").addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});

function toggleModal(name = "", role = "", image = "", desc = "") {
  const modal = document.getElementById("modal");
  const modalName = document.getElementById("modal-name");
  const modalRole = document.getElementById("modal-role");
  const modalImage = document.getElementById("modal-image");
  const modalDesc = document.getElementById("modal-desc");

  if (name && role && image) {
    modalName.textContent = name;
    modalRole.textContent = role;
    modalImage.src = image;
    modalDesc.textContent = desc;
  }

  // modal.classList.toggle("hidden");
  if (modal.classList.contains("opacity-0")) {
    modal.classList.remove("opacity-0", "scale-95", "pointer-events-none");
    modal.classList.add("opacity-100", "scale-100");
    document.body.classList.add("no-scroll");
  } else {
    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-95", "pointer-events-none");
    document.body.classList.remove("no-scroll");
  }
}

// Graph Carousel
$(document).ready(function () {
  $(".graph_Carousel").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".button_carousel_one").slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".button_carousel_two").slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".button_carousel_three").slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
  });
});
// Case Study Carousel
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

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

  if (productButton && productMenu) {
    productButton.addEventListener("click", function () {
      productMenu.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !productButton.contains(event.target) &&
        !productMenu.contains(event.target)
      ) {
        productMenu.classList.add("hidden");
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
