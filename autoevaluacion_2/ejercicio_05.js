var entrada, result;
result = 1;

do{
	entrada = parseInt(prompt("Ingrese un número entero: ", ""));
	result = result * entrada;
} while (entrada != 9999);

alert("La suma de los números ingresados es: " + (result/9999));


