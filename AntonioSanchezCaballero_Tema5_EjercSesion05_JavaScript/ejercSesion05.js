/*
Ejercicio tema 5

En este ejercicio tendrás que generar 10 números aleatorios que estén comprendidos entre 0 y 20 haciendo uso de un bucle.

*/

for (let i = 1; i < 11; i++) {

    let num = Math.random();  // [0...1)
    num = (num * 20);         // [0...20] con decimales
    num = Math.round(num);    // redondea al número más cercano

    console.log(num);
    alert(num);
}