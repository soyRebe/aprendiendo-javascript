
// funcion anonima es una funcion que no tiene nombre

/*var pelicula = function(nombre){

 
 return "la pelicula se llama" + nombre;

}*/


// callback y anonimas

function add_me (number_1, number_2, multiply,add_all){

   var add = number_1 + number_2;
   multiply(add);
   add_all(add);
   return add;
  
   
  
}
add_me(4,10, 
    function(dato){
    console.log("la multiplicacion es: " + dato*2);

},function(ii){
    console.log("la suma es :" + (ii+2))

}

);

//function flecha, para anonimas y callbacks, podesmo evitar poner "function " lo reemplazamos por el => tanpoco es necesario el ()

add_me(4,10, 
    dato=>{
    console.log( "la multiplicacion es : " + dato*2 );
    },

   ii=>{
    console.log( "la suma es :" + (ii+4) );
    }

);