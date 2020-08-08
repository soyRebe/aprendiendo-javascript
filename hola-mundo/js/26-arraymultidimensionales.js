/* son array dentro de un array */

var categorias = ["accion", "terror", "comedia"];
var peliculas =["el aguador", "it el payaso", "bad boy"];

var cine =[categorias,peliculas];
console.log(cine);
/*para acceder a la categoria accion */

console.log(cine[0][0])//0 del array multi es categoria 1 es pelicula y 0 accion
/*para accder a la pelicula */
console.log(cine[1][0])

/* agregar elementos al array */

peliculas.push('batman');
console.log(peliculas);

/** pedirle al usuario que agregue un elemento */
//var elemento = prompt("coloca tu elemento");

//peliculas.push(elemento);
//console.log(peliculas);

/* pedir elemento hasta que le user pongo cierto elemento en este caso "fin" luego borraremos ese "fin */

/*var elementos = "";

do {
    elementos = prompt("introduce tu pelicula, hasta que no pongas 'fin' me repetire");//pedimos el elemento
    peliculas.push(elementos);//agregamos
}
while(elementos != "fin"); // se repite hasta que no ponga fin

peliculas.pop(); // saco la ultima (porque sino quedará fin tambien)

console.log(peliculas);

/* hacer un array en untexto . metodo join */ 

var pelicula_string = peliculas.join(); // hay que guardarlo enuna variable nolo procesa solo como otro metodos (splice) no lo pase pera era para borar elemento de un array
console.log (pelicula_string);

/* convertir cadenas en un array */

var cadena = "texto1, texto2,texto3";
var cadena_array = cadena.split(",");
console.log(cadena_array);

/* ordenar array*/
peliculas.sort();
console.log(peliculas);


/* darle la vuelta */
peliculas.reverse();
console.log(peliculas);


/* otra forma de recorrerlo es for in */

var programacion = new Array("PHP", "JAVA" ,"C++", "COBOL");
document.write("<ul>")
for( let lenguajes in programacion){
    document.write("<li>" + programacion[lenguajes] + "</li>"); // si yo solo pongo let lenguajes sin programacion[lenguajes] me trae solo los indices, osea la cantidad que hay 0,1,2
  
}
document.write("</ul>")

/*buscar en un array find */

var busqueda = programacion.find(function(lenguajes){
    return lenguajes =="PHP";
});

console.log(busqueda);
/* cuando es algo simple podemos hacer con la funcion de flecha */

var busquedaFlecha = programacion.find(lenguajes =>lenguajes =="PHP");
console.log(busquedaFlecha);

/* buscar por indice*/

var busquedaIndex = programacion.findIndex(lenguajes => lenguajes =="COBOL");
console.log(busquedaIndex);