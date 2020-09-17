/*- El programa nos pide un número.
- Utiliza tres contadores:
Un contador: suma 5
Otro contador: suma 21
Otro contador: resta 4
- El programa nos presenta los 4 números de la siguiente forma:
La primera línea: el número introducido.
La segunda línea: los tres números tabulados, que han resultado de los tres contadores.
De forma que si introducimos el no 5 debería aparecer:
*/

var num, num1, cont_1, cont_2, cont_3;

num = parseInt(prompt("Ingrese un número: ", ""));
num1 = num;
//contadores

for (i = 1; i < 6; i++) {
	num++;
}
cont_1 = num;

for (i = 1; i < 22; i++) {
	num++;
}
cont_2 = num;

for (i = 5; i > 1; i--) {
	num--;
}
cont_3 = num;

//Salida

linea_1 = "Número introducido: " + num1;
linea_2 = "Contadores: " + "\t" + "\t" + cont_1 + "\t" + cont_2 + "\t" + cont_3;

alert(linea_1 + "\n" + linea_2);
