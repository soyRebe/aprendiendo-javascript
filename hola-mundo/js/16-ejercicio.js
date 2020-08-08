/* que nos diga si el numero es par o impar , que tenga prompt, si el numero no es valido que nos pida de nuevo el numero */

var number;

while (isNaN(number)) {

   number=parseInt(prompt("ingrese el primer numero",0));
}

if(number %2 !=0){
    alert( "numero impar ingresado");

}else{
    alert("numero par ingresado");

}
