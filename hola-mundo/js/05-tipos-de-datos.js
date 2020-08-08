"use strict"
/* Operadores , tipo de datos y tipeof */
/***** Operadores ****/
var numero1= 7;
var numero2= 12;
var operacion = numero1 + numero2;

//alert("el resultado de esta cuenta es :" + operacion);

/***** Tipos de datos**** string (cadena de texto), numero entero, booleano, mas alla array y objeto
var numero_entero= 7;
var cadena_texto= "hola soy un texto";
var verdader_falso =false;  // true o false

/* se puede sumar un string conviertiendolo con estas funciones */
// function number 
//function parseint
//function parsefloat muestra decimales

var numero_falso ="33";
var numero_falso2="25";
console.log(numero_falso + 7 ); // solo concatena da 337 porque es un string , si quiero sumarlo

console.log(Number(numero_falso) + 7); // suma 40
console.log(parseInt(numero_falso2) + 5); // suma 30

/**** convertir numeros en string con function string ***/

//string

console.log(String(numero_entero) + 1) ;// concatena da 71

/*** Typeof *****/
console.log(typeof numero_entero);