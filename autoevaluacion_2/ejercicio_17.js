/*
17) Haz un programa que “dibuje” un rectángulo de asteriscos a partir de la base y la altura.
Graba el programa con el nombre Eval2Q.htm en TuCarpeta.
*/

/*
Modelo: rectangulo 5x3

*****
*****
*****

*/
var fila, rect;
function dibuja_rectangulo(base, altura){
	fila = "";
	for (i = 1; i <= base; i++){
		fila = fila + "*";
	}
	rect = "";
	for (i = 1; i <= altura; i++){
		rect = rect + (fila + "\n");
	}
	return(rect);
}

var b, h, rectangulo, salida;

b = parseInt(prompt("Ingrese la medida de la base del rectángulo: ", ""));
h = parseInt(prompt("Ingrese la medida de la altura del rectángulo: ", ""));

rectangulo = dibuja_rectangulo(b,h);

salida = "Rectángulo de " + b + " por " + h + "." + "\n" + rectangulo;
alert(salida);

