/* 
- El programa nos pide un número entero.
- El programa nos pide la base
- El programa nos escribe el número introducido en la "base" deseada.
 */

var num, base;

num = parseInt(prompt("Ingrese un número entero. ", ""));

base = parseInt(prompt("Ingrese la base: ", ""));

alert(num + " en base " + base + " es: " + (num).toString(base));
