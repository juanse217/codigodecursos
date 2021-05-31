let array = [ 1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));
//array.flat nos muestra cierta profundidad de nuestro array 


let array = [1,2,3,4,5];

console.log(array.flatMap(value =>[value, value*2]));
//este lo que hace es coger cada valor imprimirlo y luego multiplicarlos *2


let hello = '         holi mor';
console.log(hello);
console.log(hello.trimStart());
//con el trimstart lo que hacemos es quitarle los espacios del principio a el string

let hola = 'hello world          ';
console.log(hola);
console.log(hola.trimEnd());
//con trimEnd qutamos los espacios de el final 

try{

} catch{
    error
}
//acá lo que hacemos es que no necesitamos pasarle error commo un parámetro, ya está implícito 

let entries  = [ [ "nombre", "Oscar"], [ "age", 32]];

console.log(Object.fromEntries(entries));

//acá lo que hicimos fue a partir del array generar un objeto donde cada uno de los arrays dentro de el array serán una propiedad


let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);

//acá lo que hacemso es que sólo en los objetos de tipo símbolo se puede es que nos muestra la descripción o a qué es igual ese símbolo.