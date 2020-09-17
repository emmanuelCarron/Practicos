/*
--Haz un programa que sirva para calcular un cateto de un triángulo rectángulo a partir del otro cateto y
la hipotenusa, de la siguiente forma:
El programa nos pide el valor de la hipotenusa.
El programa nos pide el valor de un cateto.
Si el cateto es mayor que la hipotenusa, el programa nos da un mensaje de error y se acaba.
El programa nos da como resultado el valor del otro cateto y nos pregunta si queremos volver a
empezar.
*/

var cateto, hipotenusa, cat_restante, seguir, temp;

seguir = true;

do{
	hipotenusa = parseFloat(prompt("Ingrese la medida de la hipotenusa: ", ""));
	cateto = parseFloat(prompt("Ingrese la medida del cateto conocido: ", ""));
	if (cateto < hipotenusa) {
		cat_restante = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto, 2));
		alert("La medida del cateto restante es: " + cat_restante);
	} else {
		alert("La medida del cateto no debe ser mayor que la medida de la hipotenusa");
	}
	temp = prompt("¿Desea realizar otro cálculo? ", "Si o No").toLowerCase();
	switch(temp){
		case "s":
		case "si":
			seguir = true;
			break;
		case "n":
		case "no":
			seguir = false;
			break;
	}
} while (seguir == true);
