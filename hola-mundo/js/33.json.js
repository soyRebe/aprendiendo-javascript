//json

var pelicula = {
    titulo : 'batman',
    year : 2016,
    pais : 'norte'

}

console.log(pelicula);
console.log(pelicula.titulo);

//cambiar alguna propiedad

pelicula.titulo = 'cucu';
console.log(pelicula.titulo)

//array

var peliculas = [
    {titulo:'los vengadores', year : 2018, pais:'eeuu'},
    {titulo:'caballos salvaje', year :1993, pais :'argentina'},
    pelicula
];

console.log(peliculas);

var my_box = document.querySelector('#box');

for ( let cine in peliculas){
    var parrafos = document.createElement("p");
    parrafos.append(peliculas[cine].titulo);
    my_box.append(parrafos);
}