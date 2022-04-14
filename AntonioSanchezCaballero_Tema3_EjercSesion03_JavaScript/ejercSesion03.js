/*
Ejercicio Tema 3_1

En este primer ejercicio tendrás que recorrer los números del 1 al 100 mediante un bucle y que cuando muestre un número par, muestre por pantalla que el número es par, en otro caso tendrá que mostrar que es impar.
Pista: tendréis que hacer un comprobación dentro del bucle.


Ejercicio Tema 3_2
En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta. Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo".
*/

// ejercSesion02_1

for ( let i = 1; i <= 100; i++ ) {
    if (i%2 == 0){
    console.log ("El número " + i + " es par");
    } else console.log (`El número ${i} es impar`); // ES6    // ES <6 } else console.log ("El número " + i + " es impar");
}

console.log ("--------------------------------------")

// ejercSesion02_2

for ( let i = 1; i <= 10; i++ ) {
    if (i==2 || i==3 || i==5 || i==7) {
        console.log (`${i} es un número primo`);
    } else console.log (`Esta iteración corresponde al número ${i}`);
}
