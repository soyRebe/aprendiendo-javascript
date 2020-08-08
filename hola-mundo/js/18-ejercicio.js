/* una calculadora que pida dos numeros por pantalla
si el numero es ingresado correctamente que nos nos vuelva a pedir
nos muestra en el cuerpo de la pantalla en un alerta y por consola el resultado de 
dividir, sumar, restar y multiplicar esas dos cifras */

var number = parseInt(prompt("ingrese el numero", 1));
var number_2 = parseInt(prompt("ingrese otro numero", 1));
var resultado;
var resultadocm;


while (number <= 0 || number_2 <= 0 || isNaN(number) || isNaN(number_2)) {

    number = parseInt(prompt("ingrese el numero", 1));

    number2 = parseInt(prompt("ingrese otro numero", 1));
}

resultado = "la suma : " + (number + number_2) + "<br /> " +
    "la resta :" + (number - number_2) + "<br /> " +
    "la multiplicacion :" + (number * number_2) + "<br />" +
    "la division es: " + (number / number_2) + "<br /> ";

resultadocm = "la suma : " + (number + number_2) + "\n" +
    "la resta :" + (number - number_2) + "\n" +
    "la multiplicacion :" + (number * number_2) + "\n" +
    "la division es: " + (number / number_2) + "\n";      // "\ n " para que haga salto de linea en consola y alert el br solo funciona en html y documentwrite         


alert(resultadocm);
console.log(resultadocm);
document.write(resultado);


