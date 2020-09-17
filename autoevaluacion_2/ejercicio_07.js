/*
Haz un programa que sirva para hacer una tabla de valores de la función y=sen(7x-5)
El programa nos pide los dos valores de “x” (valores máximo y mínimo).
El programa nos pide el incremento (variación) de la “x”.
*/

var min, max, paso, img, tabla;

min = parseInt(prompt("Ingrese el menor valor de x: "));
max = parseInt(prompt("Ingrese el mayor valor de x: "));
paso = parseInt(prompt("Ingrese el incremento de x: "));
img = 0;
tabla = "X" + "\t" + "sen(7x-5)" + "\n";

for (i = min; i <= max; i += paso) {
	img = Math.sin(7*i - 5);
	tabla += i + "\t" + img + "\n";
}

alert(tabla);
