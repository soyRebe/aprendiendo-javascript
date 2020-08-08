//parametros rest y spread

function listadoLetras( letra1,letra2, ...masLetras){
  console.log(letra1);//a
  console.log(letra2);//e 
  console.log(masLetras); // hasta la u
 
}

listadoLetras("perro","gato","lobo","loba");

var consonantes = ["f","g","h"];

//listadoLetras(consonates,"a","e","i","o","u");

listadoLetras(...consonantes,"a","e","i","o","u");