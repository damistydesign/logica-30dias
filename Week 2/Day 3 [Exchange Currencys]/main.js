/*

    https://api.exchangeratesapi.io/v1/latest?access_key={TU-API-KEY}

    La base (divisa) es en EUR por defecto, y no se puede cambiar en el plan gratuito
*/

const fromCurrencyInput = document.getElementById('fromCurrency');
const toCurrencyInput = document.getElementById('toCurrency');
const errorMessage = document.getElementById('error');
const btnSubmit = document.getElementById('btn__submit');
const resultText = document.getElementById('result');
const montoText = document.getElementById('monto');

const URL_BASE = 'https://api.exchangeratesapi.io/v1/latest?access_key='
const API_KEY = 'YOUR-API-KEY'

const fetchURL = `${URL_BASE}${API_KEY}`

let selectedOptionFrom;
let selectedOptionTo;

function checkSelectedFrom(currency){
    if(currency.selectedIndex !== -1){
        selectedOptionFrom = currency.options[currency.selectedIndex].value;
        console.log(selectedOptionFrom)
    }else{
        console.error('error');
    }
}

function checkSelectedTo(currency){
    if(currency.selectedIndex !== -1){
        selectedOptionTo = currency.options[currency.selectedIndex].value;
        console.log(selectedOptionTo)
    }else{
        console.error('error');
    }
}


btnSubmit.addEventListener('click', () => {
    checkSelectedFrom(fromCurrencyInput);
    checkSelectedTo(toCurrencyInput);

    if(selectedOptionFrom === selectedOptionTo){
        showError('Las monedas no pueden ser iguales')
    }else if(montoText.value.trim() === ''){
        showError('Seleccione un monto')
    }else{
        const monto = parseFloat(montoText.value)

        fetch(fetchURL)
            .then((res) => res.json())
            .then((data) => {
                const rates = data.rates;
                const fromRate = rates[selectedOptionFrom];
                const toRate = rates[selectedOptionTo]
                const conversion = (monto / fromRate) * toRate;
                resultText.innerText = `$${formatNumber(conversion)}`;
                console.log(conversion)
            })
        montoText.value = '';
    }
    
})

const showError = (error) =>{
    errorMessage.innerText = error;
    errorMessage.style.opacity = 1;

    setTimeout(() => {
        errorMessage.style.opacity = 0;
    }, 2300);
}

function formatNumber(value) {
  if (value < 1) {
    return Number(value.toFixed(4)); // máximo 4 decimales si es menor a 1
  } else {
    return Math.round(value); // redondear si es 1 o más
  }
}