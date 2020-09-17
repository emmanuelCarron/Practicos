/*El programa nos pide nuestro nombre.
El programa nos pide nuestro primer apellido.
El programa nos pide en qué población vivimos.
El programa presenta una pantalla aproximadamente igual a la siguiente:
==================================
Hola nombre Apellido
Adiós habitante de Población
==================================*/

var nombre, apellido, localidad, salida;

nombre = prompt("Escribe tu nombre", "");
apellido = prompt("Escribe tu apellido", "");
localidad = prompt("Dónde vives?", "");
var linea_1 = "Hola " + nombre + " " + apellido
var linea_2 = "Adiós habitante de " + localidad
var largo_linea 
if (linea_1 < linea_2) {
	largo_linea = linea_2.length;
} else {
	largo_linea = linea_1.length;
}
var dec = "";
for (i=1; i<largo_linea; i++) {
		dec += "=";
	}

salida = dec + "\n" + linea_1 + "\n" + linea_2 + "\n" + dec

alert(salida);
