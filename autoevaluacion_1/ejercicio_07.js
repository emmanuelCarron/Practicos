//Programa para calcular un determinante de 2o orden.

var a, b, c, determinante;

a = parseFloat(prompt("Ingrese el coeficiente del término de grado 2: ", ""));
b = parseFloat(prompt("Ingrese el coeficiente del término de grado 1: ", ""));
c = parseFloat(prompt("Ingrese el coeficiente del término de grado 0: ", ""));

determinante = b *b - 4 * a * c;

if (determinante < 0) {
    alert("La solución es imaginaria...");
    } else if (determinante == 0) {
    alert("La solución es única...");
    } else {
    alert("Tiene dos soluciones...");
    }
