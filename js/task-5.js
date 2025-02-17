function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", event => {
  event.preventDefault();
  const bodyEL = document.querySelector("body");
  const spanEl = document.querySelector("span");
  bodyEL.style.backgroundColor = getRandomHexColor();
  spanEl.style.color = getRandomHexColor();
});