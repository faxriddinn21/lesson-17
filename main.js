const body = document.body;
const modeToggle = document.querySelector(".blak-btn");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
