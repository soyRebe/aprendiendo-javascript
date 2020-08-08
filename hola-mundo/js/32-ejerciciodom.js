window.addEventListener('load',function(){
    console.log("cargado");

    var formulario = document.querySelector('#formulario');
    var box_dash = document.querySelector('.dash');
    box_dash.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("envento capturado");
        box_dash.style.display = "block";    

    
        var nombre = document.querySelector('#nombre').value; // con value tomo el valor del campo
        var apellido = document.querySelector('#apellido').value;
        var edad =  parseInt(document.querySelector('#edad').value);

        // validacion del formulario

        if (nombre.trim() == null || nombre.trim().length ==0 ) {
            alert("los nombres no son válidos");
            return false;
        }
        
        if (apellido.trim() == null || apellido.trim().length ==0 ) {
            alert("los apellidos no son válidos");
            return false;
        }
        
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("la edad no es valida");
            return false;
        }
        
        var datos_usuarios = [nombre,apellido,edad];

        for( let usarios in datos_usuarios){
            var parrafos = document.createElement("p");
            parrafos.append(datos_usuarios[usarios]);
            box_dash.append(parrafos);
        }
    
    });












});//end load