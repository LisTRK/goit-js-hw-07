function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBtnFn() {
  const boxColListEL = document.querySelectorAll(".box");
    boxColListEL.forEach(boxColItem => boxColItem.remove());
}

const createBtnEl = document.querySelector("button[ data-create]");
const destroyBtnEl = document.querySelector("button[ data-destroy]");
const inputEl = document.querySelector("div>input")
const boxesEl = document.querySelector("#boxes");



createBtnEl.addEventListener("click", event => {
  event.preventDefault(); 
  destroyBtnFn();
  const boxArr = [];
  if (inputEl.value > parseInt(inputEl.min) && inputEl.value < parseInt(inputEl.max)) {
    const tempNum = 30;
    for (let i = 0; i < inputEl.value; i++) {
      const tempDiv = document.createElement("div");
      tempDiv.style.height = i * 10 + tempNum + "px";
      tempDiv.style.width = i * 10 + tempNum + "px";
      tempDiv.style.backgroundColor = getRandomHexColor();
      tempDiv.classList.add("box");
    boxArr.push(tempDiv);
    console.log(", ", tempDiv);
    
      // boxesEl.insertAdjacentElement("beforeend", tempDiv);
    }
  }
  boxesEl.append(...boxArr);
  inputEl.value = "";
})

destroyBtnEl.addEventListener("click", destroyBtnFn);
