const burgerBtn = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

const openBurgerMenu = () => {
  mobileNav.classList.add("visible");
  if (mobileNav.classList.contains("visible")) {
    overlay.classList.add("visible");
  } else {
    overlay.classList.remove("visible");
  }
};

const closeBurgerMenu = () => {
  mobileNav.classList.remove("visible");
  overlay.classList.remove("visible");
};

burgerBtn.addEventListener("click", openBurgerMenu);
overlay.addEventListener("click", closeBurgerMenu);
