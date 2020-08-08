/*  DOM */


// ver elementos por su ID
//var caja = document.getElementById("box");

var caja = document.querySelector('#box');
var color = prompt("coloca un color en ingles", "pink")
function cambiarColor(){
    caja.style.background = color;
}
cambiarColor();

console.log(caja);
caja.innerHTML = "desde JS";
caja.style.background = "pink";
caja.style.width ="50%";
caja.style.padding="2%";
caja.style.textAlign= "center";

// crear mi elemento
var mielemento= document.querySelector('#miSeccion');
var hr = document.createElement("hr");
mielemento.prepend(hr);

var verDivs = document.getElementsByTagName('div');
verDivs[2].style.color='blue';
console.log(verDivs);
// ver elementos por su class

var Rojos = document.getElementsByClassName('rojo');
for ( let  NuevoColor in Rojos){
    if(Rojos[NuevoColor].className == 'rojo'){
    Rojos[NuevoColor].style.background ="gray";
    }
}

console.log(Rojos);