const inputUser = document.getElementById('user');
const inputPass = document.getElementById('password');
const buttonSubmit = document.getElementById('buttonSubmit');
const succesAlert = document.getElementById('sucess_alert');
const errorInput = document.getElementById('errorInput');
const errorUser = document.getElementById('errorUser');
const errorPass = document.getElementById('errorPass')

const credentials = {
    user: 'admin',
    password: 'admin123'
}

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    if(inputUser.value === '' && inputPass.value === ''){
        errorInput.classList.add('visible')
        setTimeout(() => {
            errorInput.classList.remove('visible')
        }, 1500)
    }else if(inputUser.value != credentials.user){
        errorUser.classList.add('visible')
        setTimeout(() => {
            errorUser.classList.remove('visible')
        }, 1500)
    }else if(inputPass.value != credentials.password){
        errorPass.classList.add('visible');
        setTimeout(() => {
            errorPass.classList.remove('visible')
        }, 1500)
    }else{
        succesAlert.classList.add('visible')
        setTimeout(() => {
            succesAlert.classList.remove('visible')
        }, 1500)
    }
})