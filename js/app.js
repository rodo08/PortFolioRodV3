"use strict";
//top bar background after scroll
const navbar = document.querySelector("nav");
const themeHeading = document.querySelector(".theme-colors h2");

window.addEventListener("scroll", () => {
  if (scrollY > 30) {
    navbar.classList.add("active");
    themeHeading.classList.add("active");
  } else {
    navbar.classList.remove("active");
    themeHeading.classList.remove("active");
  }
});

//scroll to top
const scrollToTop = document.querySelector(".scrolltotop a");

window.addEventListener("scroll", () => {
  if (scrollY > 1000) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
});

//toggle light modes icons
const moon = document.querySelector(".uil-moon");
const sun = document.querySelector(".uil-sun");

moon.addEventListener("click", () => {
  document.body.classList.add("darkmode");
  moon.style.display = "none";
  sun.style.display = "block";
});
sun.addEventListener("click", () => {
  document.body.classList.remove("darkmode");
  sun.style.display = "none";
  moon.style.display = "block";
});
