const btnSubmit = document.getElementById('btn-submit');
const inputName = document.getElementById('name');
const jokeContainer = document.getElementById('joke-generator');
const errorContainer = document.getElementById('error');

const message = document.getElementById('message');
const jokeText = document.getElementById('joke-text');

const API_URL = 'https://official-joke-api.appspot.com/jokes/random';

btnSubmit.addEventListener('click', (e) => {
    if(inputName.value.trim() === ''){
        showErrorMessage('Por favor, pon tu nombre 🥲')
    }else{
        jokeContainer.style.opacity = 1;
        message.innerText = `Acá está tu chiste ${inputName.value} 👇`;
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                jokeText.innerHTML = `${data.setup} <br> ${data.punchline}`
            })
        btnSubmit.innerText = 'Generar Otro Chiste'
    }
}) 

function showErrorMessage(message){
    errorContainer.style.opacity = 1;
    errorContainer.innerText = message;
    setTimeout(() => {
        errorContainer.style.opacity = 0;
    }, 2200)
}