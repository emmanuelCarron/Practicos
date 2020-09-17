/*
- El programa nos pide que escribamos dos números positivos menores de 57
- El programa nos da como resultado el producto de los dos números
- Si los números no son positivos o son mayores de 57, el programa nos lo dice.
- El programa nos pregunta al final si queremos volver a empezar.
*/

function pedir_nums(){
	num1 = parseInt(prompt("Ingrese un número entero, positivo y menor que 57: ", ""));
	num2 = parseInt(prompt("Ingrese otro número entero, positivo y menor que 57: ", ""));
}

function multiplicar(){
	do{
		pedir_nums();
		if (num1 < 0 || num1 > 57 || num2 < 0 || num2 > 57){
			alert("Valores incorrectos" + "\n" + "Inténtelo de nuevo...");
		}
	}while (num1 < 0 || num1 > 57 || num2 < 0 || num2 > 57);
	
	salida = num1 * num2;
	
	alert(num1 + " por " + num2 + " es: " + salida);
}

var num1, num2, salida, seguir, temp;

seguir = true;

do{
	multiplicar();

	temp = prompt("¿Desea repetir la operación?", "Si o No").toLowerCase();
	
	if (temp == "si") {
		seguir = true;
	} else if (temp == "no") {
		seguir = false;
	}
}while (seguir == true);

alert("Hasta luego...");

