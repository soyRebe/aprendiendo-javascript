// transformacion de texto , buscar textos, contar contenido, reemplazar contenidos 

var numero = 444;
var texto1 ="espero buenos resultados con este curso dentro del curso";
var texto2 ="espero bueno resultados de este curso";
var texto3="TEXTO DE PRUEBA";

// convertir numero a un string
numero.toString();

var dato = numero.toString();
console.log(typeof dato);

var dato1 = texto1.toUpperCase();
console.log(dato1);

var dato1 = texto3.toLowerCase();
console.log(dato1);

//calcular longitud se puede saber cuanto tiene y si existe algo adentro propiedad length
// si me da 0 es que no tiene nada y undefined que esta null o no esta dfinida la variable

var nombre="";
console.log(nombre.length);

var nombre1="Rebeca";
console.log(nombre1.length);


// en array me cuenta la cantidad de elementos no de letras
var rebe;
rebe =["mundo","sol"]
console.log(rebe.length);

// concatenar - unir texto , con  + y unir variables

var texto_total = texto1 + " " +texto2;
console.log(texto_total);

//metodo concat puedo ponerle palabras, variables

var juntar = texto1.concat( ""  + texto2);
console.log(juntar);

//buscar palabras indexOF
var busqueda = texto3.indexOf("PRUEBA"); // la primera coincidencia
console.log(busqueda);

var busqueda = texto1.lastIndexOf("curso"); // la ultima coincidencia
console.log(busqueda);

// search

var busqueda = texto3.search("PRUEBA"); // la primera coincidencia
console.log(busqueda);//si tira  -1 no existe

// match devuelve array con las palabras y posiciones

var busqueda = texto1.match("curso"); // 
console.log(busqueda);//asi solo muestra el primer elemento 

var busqueda = texto1.match(/curso/g); // con la barra muestra todos
console.log(busqueda);//

// encontrar y mostrar palabras del 9 , 5 las encuentra y las saca,
var busqueda = texto1.substring(9,5); // O bue (sale)
console.log(busqueda);//asi solo muestra el primer elemento 

//sacar una letra en concreto charAT

var busqueda = texto1.charAt(10); // 
console.log(busqueda);// sale la n

//startsWith devuelve true o false solo busca al inicio del string endWith busca al final

// include da true o false poner tal cual la palabra 
var busqueda = texto1.includes("curso"); // 
console.log(busqueda);// true

// replace para modificar contenido

var busqueda = texto1.replace("curso", "gallina"); // 
console.log(busqueda);// 

//slice me quita el texto desde que se lo indico y me lo muestra

var busqueda = texto1.slice(13); // 
console.log(busqueda);// 


var busqueda = texto1.slice(2,21); // para que corte po delante y por detras
console.log(busqueda);//

// metodo split me mete en un array y si lo separo por "" espacios me hace un array por cada elemento

var busqueda = texto1.split(); // me muestra todo en un array
console.log(busqueda);

var busqueda = texto1.split(""); //me muestra todo el contenido contado por letras y me cuenta el total me hace un indice del array
console.log(busqueda);


// metodo trim me recorta los espacios que tenga por delante y por detras el string
var texto4="  dejo espacios para probar trim  "

var busqueda = texto4.trim(); // sirve para sacar los espacios cuand guardamos usuarios
console.log(busqueda);



