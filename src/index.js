("use strict");

// navigation
const btnMenuOpen = document.getElementById("menu-btn");
const logoMenu = document.getElementById("menu-logo");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-menu");

btnMenuOpen.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
  btnMenuOpen.classList.add("hidden");
  mobileMenu.classList.add(
    "flex",
    "justify-center",
    "w-full",
    "mt-8",
    "h-screen"
  );
  logoMenu.classList.add("hidden");
  document.body.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
  logoMenu.classList.remove("hidden");
  btnMenuOpen.classList.remove("hidden");
  document.body.style.overflowY = "auto";
});

// filters-projects

// start-active class for active item
const removeActive = () => {
  const btnFilter = document.querySelectorAll(".filter");
  btnFilter.forEach((element) => {
    element.classList.remove(
      "bg-primary",
      "text-white",
      "py-3",
      "px-9",
      "rounded-lg",
      "ease-in-out",
      "duration-1000"
    );
    element.classList.add("text-pColor");
  });
};

const addActive = () => {
  const btnFilter = document.querySelectorAll(".filter");
  btnFilter.forEach((element) => {
    element.addEventListener("click", (element) => {
      removeActive();
      element.target.classList.add(
        "bg-primary",
        "py-3",
        "text-white",
        "rounded-lg",
        "px-9",
        "ease-in-out",
        "duration-1000"
      );
    });
  });
};
addActive();
