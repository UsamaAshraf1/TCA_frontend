let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};

// document.addEventListener("scroll", function () {
//   let scrollY = window.scrollY;
//   let textElement = document.getElementById("scrollText");

//   // Moves the text up as the user scrolls
//   textElement.style.transform = `translateY(-${scrollY * 0.4}px)`;
// });

document.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  let textElement = document.getElementById("scrollText");

  // Calculate translation but limit it to a max of -556px
  let translateY = Math.min(scrollY * 0.3, 590);

  // Apply transform
  textElement.style.transform = `translateY(-${translateY}px)`;
});
