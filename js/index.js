const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// optional: auto-close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

const navClose = document.querySelector(".nav-close");

navClose.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
});
