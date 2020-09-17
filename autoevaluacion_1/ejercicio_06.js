//Programa para calcular la longitud de una circunferencia y el área del círculo correspondiente.

var radio, pi;

pi = Math.PI
radio = parseFloat(prompt("Ingrese el radio de la circunferencia: ", ""))

alert("La longitud de circunferencia es de " + (2 * radio * pi))
alert("El área de la circunferencia es de " + (pi * radio ** 2))
