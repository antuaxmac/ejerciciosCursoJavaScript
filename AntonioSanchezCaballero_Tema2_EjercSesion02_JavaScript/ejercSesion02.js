/*  En este ejercicio tienes que crear un archivo JavaScript donde crees una variable la cual contenga una cadena de texto.
Después crearás una función, dentro de ella crearás una variable que se llame igual que la primera que has creado y le asignarás una cadena de texto diferente a la primera y mostrarás la variable por consola.
Por último, fuera de la función tendrás que realizar la llamada a la función y mostrarás por consola la primera variable que has creado. */

// opción 1

let palabra = "Camión";  // variable global

function myfunc1 () {
    let palabra = "Coche";  // variable local, solo para el ámbito de la función
    console.log (palabra);
}

myfunc1();

console.log (palabra);


console.log ("-------")


// opción 2 

let word = "Casa";

function myfunc2 () {
    word = "Armario";  // cambiamos el valor de la variable global dentro de la función
    console.log (word);
}

myfunc2();

console.log (word);


