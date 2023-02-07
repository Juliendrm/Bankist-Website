"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Button Scroll

btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});
const header = document.querySelector(".header");

//Page navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    //console.log("link");
    //console.log(e.target);
    const id = e.target.getAttribute("href");
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/*
console.log(document.querySelector(".header"));
const allSections = document.querySelectorAll(".section");
console.log(allSections);
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
console.log(document.getElementsByClassName("btn"));
*/

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies for better analytics. <button class = 'btn btn--close-cookie'> Got it ! </button>";
header.append(message);
//Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

//Styles
message.style.backgroundColor = "#37383d";
message.style.width = "110%";
document.documentElement.style.setProperty("--color-primary", "orangered");

//Attributes
//const logo = document.querySelector(".nav__logo");
//console.log(logo.alt);
//console.log(logo.src);
//console.log(logo.className);

logo.alt = "Beautiful logo";

//Non-standard
//console.log(logo.designer);
//console.log(logo.getAttribute("designer"));
//console.log(logo.getAttribute("src"));
logo.setAttribute("company", "Bankist");
const link = document.querySelector(".nav__link--btn");
//console.log(link.href);
//console.log(link.getAttribute("href"));

//Data Attributes
//console.log(logo.dataset.versionNumber);

//Handling Events

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great!");
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1));

//Random Color
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector(".nav__link").addEventListener("click", function (e) {
  console.log("link", e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log("container", e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector(".nav").addEventListener("click", function (e) {
  console.log("nav", e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});
*/
