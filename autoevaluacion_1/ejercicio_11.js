/*- El programa nos pide un número entero.
- El programa nos da como resultado el mismo número pero en base 16
- Y por último nos lo escribe en base 5
Comprueba el programa para el número 52. Deberás calcular en primer lugar matemáticamente el valor
de 52 en base 16 y en base 5.
*/

var num;

num = parseInt(prompt("Ingrese un número entero: " , ""));

base_16 = (num).toString(16);
base_5 = (num).toString(5);

alert("Número ingresado: " + num + "\n" +
      "Número en base 16: " + base_16 + "\n"+
	  "Número en base 5: " + base_5
);
