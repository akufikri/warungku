// stickyAnimation
const navEl = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scroll");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scroll");
  }
});
// typedJS
var typed = new Typed(".types", {
  strings: ["Warung Ku."],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
