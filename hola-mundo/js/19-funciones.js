//funciones
// una funcion es una agrupacion re-utilizable de un conjunto de instrucciones
//defino la funcion
function calculadora(){
  //conjunto de instrucciones a ejecutar , 
    //si lo dejamos asi los numero son fijos, para que sea dinamico es mejor pasarle parametros y 
    //los numeros cuando invocamos a la funcion

    console.log("suma = " + (10 + 15));
    console.log("resta = " + (10-15));
    console.log("division = " + (10/15));
    console.log("multiplicacion = " + (10*15)); 
    console.log("****************************");
    //return "Hola soy la calculadora";
}
//invocar o llamar a la funcion
// calculadora();
//puedo ponerla en una variable
//var resultado = calculadora();

/* funcion con paramatros */
function calculadora(number, number_2){
    console.log("suma = " + (number + number_2));
    console.log("resta = " + (number-number_2));
    console.log("division = " + (number/number_2));
    console.log("multiplicacion = " + (number*number_2)); 
    console.log("****************************");
    return "Hola soy la calculadora";
}
//invocar o llamar a la funcion colocamos los numeros

calculadora(10,2);
calculadora(30,2);
//puedo ponerla en una variable
//var resultado = calculadora();
//dentro del for para que me haga las funciones automaticas
for (i=0; i<=8; i++){
    console.log (i) // para ver porque interaccion va
      calculadora(i , 8);
}