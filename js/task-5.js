// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const btnEl = document.querySelector(".change-color");

// btnEl.addEventListener("click", event => {
//   event.preventDefault();
//   const bodyEL = document.querySelector("body");
//   const spanEl = document.querySelector("span");
//   const randCol = getRandomHexColor();
//   bodyEL.style.backgroundColor = randCol;
//   spanEl.style.backgroundColor = randCol;
//   spanEl.style.border = '2px solid black';
// });