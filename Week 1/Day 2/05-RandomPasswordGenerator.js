//  1. Crear una función para generar la contraseña aleatoria
//  2. Tener una variable que va a almacenar el largo de nuestra contraseña
//  3. Crear una variable que almacene todos los cáracteres que puede utilizar nuestra contraseña aleatoria
//  4. Crear un bucle en el que una variable almacene el largo de los caracteres
//  5. Encontrar un número aleatorio y multiplicarlo por el lardo de la contraseña
//  6. Redondear
//  7. Retornar el valor

function getRandomPassword(lengthPassword){
    let length = lengthPassword;
    let combination = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_*/'$-:;&#!¡+"
    let password = '';
    for(var i = 0, n = combination.length; i < length; i++){
      password += combination.charAt(Math.floor(Math.random()* n))  
    }
    return password;
}

console.log(getRandomPassword(20))

// con chartAt es para imprimir especificamente un indice de un string, por lo tanto, si el resultado de redondear el numero aleatorio por el largo de n (un ejemplo, 2) entonces almacenamos el cáracter del indíce 2 del string combination (en este caso 'c'), y cada que se vaya iterando, vamos concatenando el valor previo, siempre que i sea menor que el length especificado