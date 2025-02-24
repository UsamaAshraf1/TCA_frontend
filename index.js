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

document.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  let textElement = document.getElementById("scrollText");

  // Calculate translation but limit it to a max of -556px
  let translateY = Math.min(scrollY * 0.3, 590);

  // Apply transform
  textElement.style.transform = `translateY(-${translateY}px)`;
});

function toggleDropdown(event, id) {
  event.preventDefault();
  document.getElementById(id).classList.toggle("hidden");
}
