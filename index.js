"use strict";

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");
console.log(navbar)
console.log(navbarLinks)
console.log(menuToggleBtn)

menuToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active")
  menuToggleBtn.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

// header sticky

const header = document.querySelector("[data-header]");
console.log(header)

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
