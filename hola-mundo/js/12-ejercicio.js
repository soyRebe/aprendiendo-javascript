'use strict'
/*utilizando  un bucle mostrar la media y la suma de los numeros ingresados 
por el usuario hasta que ingrese un numero negativo.*/

var suma = 0;
var contador = 0;




/*¿ Que bucle podemos usar que ejecute  un bloque de codigo sin que 
se cumpla ninguna condicion? y nos pida ingresar un dato
Usamos el DO WHILE para el numero negativo basta con que sea >= 0*/

do {
    var ingreso_numeros =parseInt(prompt("ingrese un numero hasta que ingreses uno negativo",0)); //pedimos el ingreso de numero
        if(isNaN(ingreso_numeros)){
             ingreso_numeros =0;
    }else if (ingreso_numeros >= 0) {
        suma = suma + ingreso_numeros; // sumo suma en 0 más ingreso_numero , entonces suma toma el valor de igreso_numero.
        // suma + = ingreso_numero //es lo mismo 
        contador ++; // voy contando las interracciones para poder luego sacar la media 
    }
    console.log(suma);
    console.log(contador);

}
while (ingreso_numeros >=0)

var media = suma /contador ;
alert("La suma de todos los numeros es igual a " + suma );
alert ("La media de todos los numero es igual a " + media) ;

