/*var boton = document.querySelector("#boton");*/
/* load para que se carge todo junto, ponemos todos nuestros eventos dentro del load)*/

window.addEventListener('load', ()=>{

    function cambiarColor() {
        console.log("me has presionado");

        var bg = boton.style.backgroundColor;

        if (bg =="gray") {
            boton.style.backgroundColor ="pink";
        } else {
            boton.style.backgroundColor ="gray";

        }
    return true;


    }
    /* enventos para no ponerlos en el còdigo html addlistener()*/
    /* click */
    var boton = document.querySelector("#boton");
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    /* mouseover */
    var boton = document.querySelector("#boton");
    boton.addEventListener('mouseover', function(){
    boton.style.backgroundColor="blue";
    });

    /* mouseOut */

    var boton = document.querySelector("#boton");
    boton.addEventListener('mouseout', function(){
    boton.style.backgroundColor="violet";
    });

    /* focus*/
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
    console.log("estas dentro del input")
    });

    /* blur*/
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('blur', function(){
    console.log("estas fuera del input")
    });

    /* keydown */

    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keydown', function(event){
    console.log("estas presionando una tecla", String.fromCharCode(event.keyCode));
    });


    /* keypress */

    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keypress', function(event){
    console.log("tecla presionada", String.fromCharCode(event.keyCode));
    });


    /* keyup */ /* de paso pruebo la function flecha*/
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keypress', (event)=>{
        console.log("tecla soltada", String.fromCharCode(event.keyCode))

    });
   
   

 


});     // end load