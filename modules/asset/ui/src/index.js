export default () => {
  // Your own project level JS may go here
  console.log("Hello World");

  // To drive hamburger menu
  const btn = document.querySelector("img.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");
  if (btn) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
};
