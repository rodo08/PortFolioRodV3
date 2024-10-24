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

//color picker
const colorPicker = document.querySelectorAll(".colorpicker");

colorPicker[0].addEventListener("click", () => {
  document.body.classList.add("color1");
  document.body.classList.remove("color2", "color3", "color4");
});

colorPicker[1].addEventListener("click", () => {
  document.body.classList.add("color2");
  document.body.classList.remove("color1", "color3", "color4");
});

colorPicker[2].addEventListener("click", () => {
  document.body.classList.add("color3");
  document.body.classList.remove("color1", "color2", "color4");
});

colorPicker[3].addEventListener("click", () => {
  document.body.classList.add("color4");
  document.body.classList.remove("color1", "color2", "color3");
});

//toggle menu responsive
const listItems = document.querySelector("nav ul");

const listItems = () => {
  listItems.classList.toggle("listItems");
};
