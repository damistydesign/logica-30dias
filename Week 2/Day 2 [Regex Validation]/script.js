const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error__container");
const success = document.getElementById('succes__container');

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailInput.value.trim() === "" && passwordInput.value.trim() === "") {
    showError("Los campos no pueden estar vacíos");
  } else {
    if (regexEmail.test(emailInput.value)) {
      // acá se enviaría el formulario, pero de momento mostramos un mensajito
      showSucces('Login iniciado con éxito')
    } else {
      showError("El email es inválido");
    }
  }
});

const btnSubmit = document.getElementById("btn__submit");

// btnSubmit.addEventListener("click", (e) => {});

function showError(message) {
  error.style.opacity = "1";
  error.innerText = message;

  setTimeout(() => {
    error.style.opacity = "0";
  }, 1500);
}

function showSucces(message){
    success.style.opacity = "1";
    success.innerText = message;

    setTimeout(() => {
        success.style.opacity = "0";
    }, 1500);
}