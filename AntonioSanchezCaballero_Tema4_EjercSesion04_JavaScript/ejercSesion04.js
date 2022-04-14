/*
Ejercicio 1

En este primer ejercicio tienes que crear una cadena de texto con una frase, por ejemplo: “El perro de mi vecina es muy molesto” y reemplazar la palabra vecina por vecino. Por consola tienes que mostrar la frase con las palabras cambiadas.


Ejercicio 2

Como segundo ejercicio, tienes que crear otra variable con una cadena de texto y convertir todo el contenido de la cadena a mayúsculas y lo mostraréis por consola.
*/


// ejercicio 04_1

let frase = "El perro de mi vecina es muy molesto";
console.log(frase);

let fraseCambiada = frase.replace("vecina", "vecino");
console.log(fraseCambiada);

console.log("------------------------------------");

// ejercicio 04_2

let texto = "esto es una frase escrita en minúsculas";
console.log(texto);

let textoCambiado = texto.toUpperCase();
console.log(textoCambiado + " Y CONVERTIDA A MAYÚSCULAS");