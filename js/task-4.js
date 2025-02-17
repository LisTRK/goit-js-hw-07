const formEl = document.querySelector(".login-form");

const elements = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
};

formEl.addEventListener(`submit`, event => {
    event.preventDefault();
    elements.email = formEl.elements.email.value.trim();
    elements.password = formEl.elements.password.value.trim();
    if (elements.email === "" || elements.password === "")
        alert("All form fields must be filled in");
    else{
        console.log(elements);
    }
    formEl.elements.email.value = "";
    formEl.elements.password.value="";
});
