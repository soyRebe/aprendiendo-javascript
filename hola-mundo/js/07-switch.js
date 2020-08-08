"use strict"

var edad = 14;
var imprimir = "";

switch (edad) {
    case 18:
        imprimir = "tienes la edad de " + edad + "" + " " + "años";
        break;
    case 20:
        imprimir = "tienes la edad de " + edad + "años";
        break;
    case 70:
        imprimir = "eres muy mayor";
        break;
    default:
        imprimir ="ualalalla";      
}
console.log(imprimir);