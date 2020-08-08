//ejercicio uno , hacer un programa que nos pida dos numeros y nos diga cual es el mayor, el menor y si son iguales.-

//para pedir  prompt()
//comparamos if / else
// como hacer para que mientras el dato ingresado sea incorrecto se repita el mensaje hasta que sea correcto.

var my_number1 =parseInt(prompt("escribe el primer  numero","0"));
var my_number2 = parseInt(prompt("escribe el segundo número", "1"));

while(my_number1<=0 || my_number2 <=0 || isNaN(my_number1) || isNaN(my_number2)){
    my_number1 =parseInt(prompt("escribe el primer  numero","0"));
    my_number2 = parseInt(prompt("escribe el segundo número", "1"));
}
//IsNaN corrobora que sea un numero
if(my_number1 == my_number2){
    alert('los número son inguales')

}  else if(my_number1> my_number2) {
    
    alert( "el número mayor es " + my_number1 + " el numero menor es " + my_number2);

}else if(my_number2 > my_number1){
    alert("el numero mayor es" + my_number2 + " el numero menor " + my_number1);
}else {
    alert ("introduce números correctos");
}