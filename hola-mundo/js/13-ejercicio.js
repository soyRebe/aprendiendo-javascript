/* hacer un programa que muestre todos los numeros entre dos numeros ingresados por el usuario*/


var ingrese_number1 =parseInt(prompt("ingrese el primer numero",0)); //pedimos el ingreso del primer numero

var ingrese_number2 =parseInt(prompt("ingrese el segundo numero",0)); //pedimos el ingreso del segundo numero




/*document.write ("<h3>Desde el número " + ingrese_number1 +   " al " + ingrese_number2 + "hay esos numeros </h3>")
for (numeros_ingresados= ingrese_number1;numeros_ingresados <=ingrese_number2;numeros_ingresados++ ){

    document.write(numeros_ingresados + "<br / >");
}*/


document.write ("<h3> entre los numeros ingresados " + ingrese_number1 + "y" + ingrese_number2 + " están los siguientes números </h3>" )
 
      for(i=ingrese_number1;i<=ingrese_number2; i++){
       console.log(i);
    document.write ( i +"<br />" );
}


for(i=ingrese_number2;i<=ingrese_number1;i++){
    console.log(i);
   document.write ( i +"<br />" );
}