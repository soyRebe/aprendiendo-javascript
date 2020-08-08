/* muestre todos los numeros divisores de un numero ingresado en un prompt */

var number  =parseInt(prompt("ingrese un numero",1));

for (var i=1; i<=number; i++){
    if(number % i ==0){
        console.log("divisor =" + i);
    }

}

