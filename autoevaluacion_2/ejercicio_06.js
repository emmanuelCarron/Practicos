/*
Haz un programa que escriba todos los múltiplos de 23 inferiores a 1000 y por último nos dé la suma
de todos ellos.
*/

var sum, salida;

salida = "";
sum = 0;

for (i = 1; i * 23 < 1000; i++) {
	sum = sum + i * 23;
	salida = salida + i * 23 + "\n";
}

alert("Múltiplos de 23 menores que 1000:" + "\n" +
	   salida +
	  "Sumatoria:" + "\n" +
	   sum);
