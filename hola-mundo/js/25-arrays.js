var nombre = "Rebeca";
var nombres =["rebe", "Leon", "chiquito",true, 52];

/* tambien puedo definir mi array en forma de objeto con NEW*/

var lenguajes = new Array("PHP", "JAVA" ,"C++", "COBOL"); 

console.log(lenguajes.length);

/*mostrar el elemento que pida el usuario 
var elemento =  parseInt(prompt("coloca un numero para ver el elemento", 0))
    if(elemento>=nombres.length){
        alert("introduce un numero menor o igual a " + nombres.length);

}else{
       alert(" el nombre es " + nombres[elemento]);
}


/*mostrar todos los elementos del array */

document.write("<h1>los lenguajes de programación son</h1>");
document.write("<ul>");
for(var i=0; i<lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] +"</li>");
}

document.write("</ul>");

/**otras manera de recorre array for for each */
document.write("<ul>");
nombres.forEach(element => {    //esta es una funcion de callback  se le pasa (elemento,index, data)tres datos pero funciona igual asi
    document.write("<li>" + element +"</li>")
});
document.write("</ul>");

/* con indice */
document.write("<ul>");
nombres.forEach((elemento,indice) => {    
    document.write("<li>" + indice + "-" + elemento +"</li>")
});
document.write("</ul>");

//si queremos podemos poner el array y nos muestra ele lemento limpio

document.write("<ul>");
nombres.forEach((elemento,indice,array) => {   
    console.log(array) ;
    document.write("<li>" + indice + "-" + elemento +"</li>")
});
document.write("</ul>");



/* otra forma de recorrerlo es for in */

/*var programacion = new Array("PHP", "JAVA" ,"C++", "COBOL");
document.write("<ul>")
for( let lenguajes in programacion){
    document.write("<li>" + programacion[lenguajes] + "</li>"); // si yo solo pongo let lenguajes sin programacion[lenguajes] me trae solo los indices, osea la cantidad que hay 0,1,2
  
}
document.write("</ul>")*/