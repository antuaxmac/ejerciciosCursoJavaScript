/*
Ejercicio tema 6

En este ejercicio tienes que rellenar un array con los números del 10 al 20 y mostrarlo por consola.


*/
// método 1, creamos una Array vacía y con método push la rellenamos después
let myArrayA = []; 
console.log(myArrayA);
myArrayA.push(1,2,3,4,5,6,7,8,9,10);
console.log(myArrayA);

// método 2, creamos una Array y a la vez la rellenamos con los datos que queramos
let myArray = [10,11,12,13,14,15,16,17,18,19,20];
console.log(myArray);

console.log("Métodos de Array")
console.log("----------------")

let myArray2 = [];
myArray2.push("hola", 45, "moto", "cocodrilo");
console.log(myArray2);
console.log(myArray2.length); // devuelve el tamaño de la Array
console.log(myArray2[0]);  // devuelve el elemento de la Array con el índice especificado
console.log(myArray2[0,2]); // devuelve los elementos de la Array con los índices especificados

myArray2.push("gallina", 484); // añade elementos al final de la Array
console.log(myArray2);

myArray2.pop(); // elimina el último elemento de la Array
console.log(myArray2);

myArray2.unshift(2,5); // añade elementos al principio de la Array
console.log(myArray2);

myArray2.shift(); // elimina el primer elemento de la Array
console.log(myArray2);

myArray3 = myArray2.concat("avión", "lechuga"); // concatena elementos al final de una NUEVA Array
console.log(myArray3);
console.log(myArray2); // mantiene intacta la Array

let myArray4 = ["Pollo", "Gallina", "Pato", "Lunes"];
myArray5 = myArray4.slice(1,3); // extrae en una NUEVA Array los elementos indicados en los índices empezando por el indicado y terminando por el anterior al indicado
console.log(myArray5);
console.log(myArray4); // mantiene intacta la Array

let myArray6 = ["Galaxia", "Planeta", "Estrella", "Universo"];
console.log(myArray6);
myArray6.splice(1); // elimina elementos desde la posición indicada hasta el final
console.log(myArray6);  // la Array queda modificada

let myArray7 = ["Perro", "Gato", "Buho", "Delfín"];
console.log(myArray7);
myArray8 = myArray7.join(" y "); // devuelve el contenido juntándolo con lo indicado
console.log(myArray7);
console.log(myArray8);

let texto = "El cantar del mío Cid";
let myArray9 = texto.split(" "); // devuelve una Array por cada palabra de la frase
console.log(myArray9);

myArray9 = texto.split(""); // devuelve una Array por cada letra de la frase
console.log(myArray9);


myArray10.from("Canario"); // CONSULTAR ???




