const miNombre = 'Damián';

let nameToArray = miNombre.split("") // 'split' convierte cada letra del arreglo en un item independiente dentro del arreglo

const reversedName = nameToArray.reverse() // 'reverse' invierte el orden de los items del arreglo

const joinedName = nameToArray.join('') // 'join' une todos los items del arreglo en uno solo

console.log(joinedName) // imprimimos el resultado
