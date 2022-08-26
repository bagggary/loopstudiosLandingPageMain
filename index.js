const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger ul");

burger.addEventListener("click", () => {
  burger.classList.toggle("clicked");
  burgerMenu.classList.toggle("open");
});
