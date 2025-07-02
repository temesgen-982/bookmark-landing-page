const menuBtn = document.querySelector("#nav-toggle");
const menu = document.querySelector("#nav");
const logoSVG = document.querySelector("#header-logo");

let menuOpen = false;

const icon = {
  open: "assets/images/icon-hamburger.svg",
  close: "assets/images/icon-close.svg",
};

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menu.classList.toggle("hidden");

  menuBtn
    .querySelector("img")
    .setAttribute("src", menuOpen ? icon.close : icon.open);
  const mainPath = logoSVG
    .querySelector('path[fill="#242A45"]')
    .classList.toggle("main-path");

  // changing the logo color
  const circle = logoSVG.querySelector("circle").classList.toggle("circle");
  const innerIcon = logoSVG
    .querySelector('path[fill="#FFF"]')
    .classList.toggle("inner-icon");

  // avoid scrolling when menu is open
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
