//Programa para dividir dos números o dos cadenas
var num1, num2, str1, str2;
num1 = parseInt(prompt("Ingrese un número entero: "));
num2 = parseInt(prompt("Ingrese otro número entero: "));
alert("La division entre " + num1 + " y " + num2 + " es: " + (num1 / num2));
str1 = prompt("Ingrese nuevamente un número: ");
str2 = prompt("Ingrese otro número: ");
alert("La division entre las cadenas " + str1 + " y " + str2 + " es: " + (str1 / str2));
alert("Y si intentamos dividir 3 entre 0: " + (3/0))
alert("Y si intentamos dividir \"3\" entre 0: " + ("3"/0))