//  1. Tener un arreglo con numeros
//  2. Comprobar si el residuo de cada numero dividido por 2 es 0 (ya que un número par, es aquel que su risiduo es 0)
//  3. Aumentamos la cantidadNumeros para saber el total de numeros pares que tengamos.
//  4. Imprimimos en consola.

const numeros = [2, 3, 5, 8, 10, 22];

let cantidadNumeros = 0;

numeros.forEach(numero => {
  if((numero % 2 === 0)){
    cantidadNumeros++;
  }
})

console.log('El arreglo tiene: ', cantidadNumeros, 'numeros pares')