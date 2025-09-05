//  1. Tener una variable que almacene una palabra
//  2. Comprobar con una sentencia si la palabra contiene alguna Vocal (A, E, I, O, U)

// Opción 1, sin contar las vocales
const word = 'Hola'
if(word.includes("a", "e", "i", "o", "u")){
  console.log('Contiene alguna vocal');
}

// Opción 2, contando las vocales
//  1. Crear una variable que almacene una palabra
//  2. Convertir la palabra en un arreglo
//  3. Comprobar si cada letra del arreglo es una vocal
//  4. Sumar y almacenar en un numero por cada vocal que se encuentre

const secondWord = 'Hola'
let countVocal = 0;
const arrayWord = secondWord.split("");

arrayWord.forEach(letter => {
  if( letter === 'a' | 
      letter === 'e' | 
      letter === 'i' | 
      letter === 'o' | 
      letter === 'u'){
    return countVocal++;
  }
})

console.log('El número de vocales es:', countVocal)