//  Paso 1: tener el arreglo con los valores
//  Paso 2: Tener una variable que almacene el número máximo por cada iteracción 
//  Paso 3: Comparar si cada número del arreglo es mayor que el de la variable 'max'
//  Paso 4: Retornar el valor máximo

const numbers = [12, 13, 14, 15, 98, 15]

let max = numbers[0]; // Esto apunta al número del índice 0 (12)

numbers.forEach((number) => {
  // Por cada número comprobamos
  // Si número es mayor que max (el numero que almacenamos en max)
  if(number > max){
    // imprimimos cada número para tener mejor idea de como está comprobando
    console.log(number)
    // y asignamos ese numero a la variable max (pj: 13 > 12? Sí, max = 13, 14 > 13? Sí, max = 14, etc)
    max = number;

    // Retornamos max
    return max;
  }  
})

// Lo imprimimos
console.log(max)