//ALERTA
//alert('hacemos alertas');

//alerta y confirmacion

//confirm('Quiere continuar?');

// recuperar respuesta del usuario de confirm

var mi_resultado = confirm('Quiere continuar?');
console.log(mi_resultado);

if(mi_resultado==true) {
 alert("entonces continuamos");
}else {
    alert("adios");
}

//metodo para ingreso de datos Prompt

var my_data=prompt("ingrese su edad" , "18") ;// si quiero capturalo lo guardo en variable
console.log(typeof Number(my_data));