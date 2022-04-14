/*
Ejercicios Tema 8

Ejercicio 1

En este ejercicio tienes que crear varias funciones. Las funciones tienen que representar las operaciones básicas de una calculadora: sumar, restar, multiplicar y dividir.
En la función de dividir, tendréis que realizar una comprobación para verificar que el segundo número no sea un 0, en el caso de que sea un 0 tendréis que mostrar el mensaje “No se puede dividir por cero”.
Tienes que mostrar los resultados por consola.

*/

// ejercicio 1

// función suma de 2 números en <ES6
function sum (a, b) {  
    resultSum = (a + b);
    console.log(resultSum);
    return a + b;
}
sum(100,-50);

// función suma de 2 números en ES6
const sum2 = (a,b) => { a + b;
    resultSum2 = (a + b);
    console.log(resultSum2);
    return a + b;
}
sum2(120,-20);

// función resta de 2 números en <ES6
function rest (a, b) {
    resultRest = (a - b);
    console.log(resultRest);
    return a - b;
}
rest(-80,(-40));

// función resta de 2 números en ES6
const rest2 = (a,b) => { a - b;
    resultRest2 = (a - b);
    console.log(resultRest2);
    return a - b;
}

rest2(50,30);

// función multiplicar 2 números en <ES6
function multp (a, b) {
    resulMultp = (a * b);
    console.log(resulMultp);
    return a * b;
}

multp(2,20);

// función multiplicar 2 números en ES6
const multp2 = (a, b) => {a * b;
    resultMultp2 = (a * b);
    console.log(resultMultp2);
    return a * b;
}

multp2(5,50);

// función dividir 2 números en <ES6
function divid (a, b) {
    if(b == 0) {
        console.log("No se puede dividir un número entre 0");
    }
    resultDivid = (a / b);
    console.log(resultDivid);
    return a / b;
}

divid (100,5);

// función dividir 2 números en ES6
const divid2 = (a, b) => { a / b;
    if(b == 0) {
    console.log("No se puede dividir un número entre 0");
    }
    resultDivid2 = (a / b);
    console.log(resultDivid2);
    return a / b;
}

divid2(33,0);