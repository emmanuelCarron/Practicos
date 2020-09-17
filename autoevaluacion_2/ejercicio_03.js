/*
Escribe un programa que nos vaya pidiendo números. Si escribimos el número 9999 se acaba; por
último el programa nos da como resultado el número de números introducidos, exceptuando el 9999.
*/
 var entrada, result;
result = 0;

do{
	entrada = parseInt(prompt("Ingrese un número entero: ", ""));
	result = result + entrada;
} while (entrada != 9999);

alert("La suma de los números ingresados es: " + result);


