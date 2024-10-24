"use strict";
//top bar background after scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY > 30) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
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
