const mainContainer = document.querySelector(".container");
const headerEl = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav__btn");
const overlay = document.querySelector(".overlay");

const navToggle = () => {
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("hidden");
};

const overlayClick = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    navBtn.classList.remove("active");
    overlay.classList.add("hidden");
  }
};

navBtn.addEventListener("click", navToggle);
overlay.addEventListener("click", overlayClick);
