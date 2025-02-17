const inputEl = document.querySelector("#name-input");
const nameIutoutEl = document.querySelector("#name-output");

inputEl.addEventListener("input", event => {
    const inputName = event.currentTarget;
    if (inputName.value.trim() === "")
        nameIutoutEl.textContent = "Anonymous";
    else
        nameIutoutEl.textContent = inputName.value.trim();
});

inputEl.addEventListener("blur", event => {
    const inputName = event.currentTarget;
    inputName.value = "";
    
});