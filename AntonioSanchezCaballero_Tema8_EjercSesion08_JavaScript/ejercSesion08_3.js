/*
Ejercicios Tema 8

Ejercicio 3
En el mismo archivo del ejercicio 2, modifica la función para que alerte al usuario cuando el parámetro no sea un array o este esté vacío.
Si el parámetro es un array con más de un elemento, la función debe realizar lo descrito en el ejercicio anterior.

*/

let e = function (){
    console.log("El parámetro introducido no es una Array o está vacío");
}

let b = function (){
    console.log("El proceso se ha realizado satisfactoriomente");
}


let myProgram = function (callbackError, callback, myArrayA = []) {
    if((Array.isArray(myArrayA)) && myArrayA.length > 1) {
        console.log(myArrayA);
        myArrayA.pop();
        console.log(myArrayA);
        b();
    } else e();
    
    }
myProgram(e,b,[1,2,3,4,5,6,7,8]);
