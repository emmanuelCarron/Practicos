//Programa para restar dos números o dos cadenas
var num1, num2, str1, str2;
num1 = parseInt(prompt("Ingrese un número entero: "));
num2 = parseInt(prompt("Ingrese otro número entero: "));
alert("La resta entre " + num1 + " y " + num2 + " es: " + (num1 - num2));
str1 = prompt("Ingrese nuevamente un número: ");
str2 = prompt("Ingrese otro número: ");
alert("La resta entre las cadenas " + str1 + " y " + str2 + " es: " + (str1 - str2));