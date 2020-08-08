//let y var
// let actua a nivel de bloque 
//var actua a nivel global

/* prueba con var */

var numero= 40;
console.log (numero) // aca imprime 40

if(true){
    var numero = 50;
    console.log(numero) //aca imprime 50 
}

console.log(numero) // aca muestra 50 porque reasigna el valor ( el contenido de la variable var lo modifica)


/* prueba con let */

var texto = "texto uno";
console.log(texto); // muestra texto uno

if(true){
    let texto ="texto dos";
    console.log(texto); // muestra texto dos
}

console.log(texto); // muestra texto uno , solo reasigna en el bloque no todo.