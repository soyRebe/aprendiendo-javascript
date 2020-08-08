/*1. hacer un programa que pida 6 numeros por pantalla y los meta en un array
  2. tiene que mostrara todos los elementos del array en el cuerpo de la pagina y consola
  3. tenemos que ordenarlo y mostrarlo
  4.invertir su orden y mostrarlo
  5.mostrar cuantos elementos tiene el array
  6.hacer una busqueda de un valor introducido por el usuario y nos diga si lo encuentra y su indice.

*/

// pedir Numeros
// dos formas de hacerlo
//var numeros = new Array(6);


// mostrar numeros
/*document.write("<h1>" + "los numeros son " + "</h1>" + numeros  + "<br/>");


document.write( "<h1>" + "los numeros son  ordenados son" + "</h1>" + "<li>" + numeros.sort() + "</li>");

// el tipo losmuestra con foreach prueb con for in
document.write("<ul>")
for(let vernumeros in numeros){
  document.write ("<li>"+ numeros[vernumeros]+ "</li>");
}
document.write("</ul>")
//muestra el array por la consola
console.log(numeros);

// cuantos elementos tiene el array
document.write(" el array tiene esta cantidad de elementos :" + numeros.length);*/

//despues se hizo esta funciòn porque siempre era lo mismo el array
function mostrarArray (texto ="") {
  document.write("<h1>" + "los numeros son " + texto  + "</h1>");
  document.write("<ul>")
  for(let vernumeros in numeros){
  document.write ("<li>"+ numeros[vernumeros]+ "</li>");
}
document.write("</ul>");

}

//pide un numero
var numeros =[];
for (var i = 0; i <= 5 ; i++){
 // numeros[i] = prompt("coloca 6 numeros", 0);
 numeros.push(prompt("coloca 6 numeros", 0));
}

numeros;
mostrarArray(' sin ordenar');

numeros.sort();
mostrarArray('ordenados');

document.write(" el array tiene esta cantidad de elementos :" + numeros.length);

numeros.reverse();
mostrarArray('dado vuelta');


var busqueda = prompt("busca un numero", 0)
var indice = numeros.findIndex(test =>test == busqueda);
if (indice && indice != -1){
  document.write("<h1>" + "encontrado el " +  busqueda +  " en la posicion: " + indice + "</h1>" );
}else {
  document.write("<h1>" + "no hemos encontrado nada :(" + "</h1>" );
}
  console.log(busqueda);

