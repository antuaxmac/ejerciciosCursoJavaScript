/*
Ejercicios Tema 8

Ejercicio 2

En este ejercicio tienes que crear un archivo javascript que contenga una función llamada eliminarUltimo() que reciba como parámetro un array y elimine el último elemento de este.

*/

function eliminarUltimo (myArray = []) {
    myArray.pop();
    console.log(myArray);
}
eliminarUltimo([1,2,3,4,5,6]);
