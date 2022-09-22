"use strict";

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");
console.log(navbar);
console.log(navbarLinks);
console.log(menuToggleBtn);

menuToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
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
console.log(header);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// searchbox toggel

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElement = [searchBtn, searchSubmitBtn, searchCloseBtn];
for (let i = 0; i < searchBoxElement.length; i++) {
  searchBoxElement[i].addEventListener("click", () => {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}
