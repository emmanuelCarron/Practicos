/*
- El programa nos pide un número en base ocho
- El programa nos lo escribe en base decimal.
- Y por último en base 2.
Comprueba el programa para el número 65618. Deberás resolver en primer lugar el problema
matemáticamente.
 */

var num, numBaseDec, numBase2;

num = prompt("Ingrese una número en base 8: ");
numBaseDec = parseInt(num, 8);
numBase2 = numBaseDec.toString(2);

alert(num + " en base decimal: " + numBaseDec + "\n" +
      num + " en base 2: " + numBase2
);