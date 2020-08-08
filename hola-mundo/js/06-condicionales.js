"use strict"
// condicional IF
// condicional algo compara algo algo para hacer algo
/* operadores relacionales 
mayor: >
mayor o igual: >=
menor: <
menor o igual: <=
diferente: !=
 igual: ==
*/

var edad = 14;
var edad1 = 10;
var edad2 = 15;
var nombre = 'Leon';


// si pasa esto
if (edad1 > edad2) {
    // ejecuta esto
    console.log("La edad1 es mayor que la edad2");
} else // y si no
{
    console.log("La edad1 es menor");
}

if (edad >= 18) {

    console.log(nombre + " " + "es mayor de edad porque tiene" + " " + edad + " " + "años");
} else {
    console.log(nombre + " " + "es menor de edad porque tiene" + " " + edad + " " + "años");
}


// anidar if

if (edad >= 18) {
    console.log(nombre + " " + "es mayor de edad porque tiene" + " " + edad + " " + "años");

    //anidacion aca 
    if (edad <= 60) {
        console.log("puedes aplicar al puesto laboral");
    } else {
        //else de la anidacion
        console.log("no puedes aplicar")
    }
} else {
    console.log(nombre + " " + "es menor de edad porque tiene" + " " + edad + " " + "años");
}

//anidacion else if
if (edad >= 18) {
    console.log(nombre + " " + "es mayor de edad porque tiene" + " " + edad + " " + "años")
    //anidacion if
    if (edad >= 60 ) {
        console.log(nombre + " " + "por tu edad de " + " " + edad + " " + "no puedes aplicar");
        // elseif 
    } else if (edad >= 25) {
        console.log(nombre + " " + "felicitaciones, por tu edad de " + " " + edad + " " + " puedes aplicar");
    }
    // else  
} else {
    console.log(nombre + " " + "por tu edad de " + " " + edad + " " + " igresaras a la academia juvenil");
}


/* operadores logicos */
//Or || que seria como decir  o
//and && es el y
//negacion   !=



//anidacion else if y operadores logicos
if (edad <= 15 || (edad >= 60)) {
    console.log(nombre + " " + "por tu edad de " + " " + edad + " " + "no puedes aplicar");

    //anidacion if
    if (edad >= 18) {
        console.log(nombre + " " + "es mayor de edad porque tiene" + " " + edad + " " + "años");
        // elseif 
    } else if (edad >= 25) {
        console.log(nombre + " " + "felicitaciones, por tu edad de " + " " + edad + " " + " puedes aplicar");
    }

} else {
    console.log(nombre + " " + "por tu edad de " + " " + edad + " " + " igresaras a la academia juvenil");
}
