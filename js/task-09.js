function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const chgColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");
const btnChgColor = chgColor.addEventListener("click", (e) => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.innerHTML = `<span class="color">${bodyColor.style.backgroundColor}</span></p>`
})
