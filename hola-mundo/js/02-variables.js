// variables
//probar con error var pais=España;

var pais="España";
var continente ="Europa";
var antiguedad=2020;

//concatenar las dos variables
var pais_y_continente = pais + ' ' + continente;
console.log(pais,continente,antiguedad);
alert(pais_y_continente);
// si cambio el valor no defino var otra vez porque ya esta arriba
pais="mexico";
continente ="Latinoamerica";
console.log(pais + ' ' + continente);

//use estric
/* sirve para indicar unmodo estricto, si este esta habilitado y no defino la variabel con "var" no fucionara, 
si esta deshabilitado y coloco pais="españa" sin la palabra var, genera automaticamente pais como variable */

