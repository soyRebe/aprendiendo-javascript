// plantillas

var nombre = prompt("coloca tu nombre", "");
var apellido = prompt("coloca tu apellido", "");

/*var texto = "mi nombre es " + " "+  nombre + " <br />" + "mi apellido es " +  apellido ;

document.write(texto);*/

//ahora con las comillas invertidas puedo hacer un texto enorme y ponerle

var texto =`
<h1> Hola!</h1>
<h3>mi nombre es :${nombre}</h3>
<h3>mi apellido es :${apellido}</h3>`;

document.write(texto);