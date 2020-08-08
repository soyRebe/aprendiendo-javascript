/* tabla de multiplicar de un numero introducido por pantalla */
// pero hasta que numero?
//20

var number;
var contador =10;

while (isNaN(number)) {

   number=parseInt(prompt("de que numero quieres la tabla de multiplicar", 1));
}
for(i=1;i<=contador; i++){
    var resultado = number * i;
    document.write (number + "x" + i + "=" + resultado +"<br />");

   
    console.log(resultado)
}
// todas las tablas


for (t=1;t<=10;t++){
    document.write("<h3> La tabla del " + t + "</h3><br/>");
    for(i=1;i<=10;i++){
        document.write( i +  "x" + t + "=" + (t*i) + "<br />");
     }
}

