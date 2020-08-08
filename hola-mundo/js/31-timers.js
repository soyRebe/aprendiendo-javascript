window.addEventListener('load', () => {
    //timers


    function intervalo() {

        var tiempo = setInterval(function () 
        {
            console.log('set interval ejecutandose');
            var encabezado = document.querySelector("h1");
            if (encabezado.style.color == "gray") {
                encabezado.style.color = "pink";
            }
            else {
                encabezado.style.color = "gray";
            }
        }, 5000);//cada que tiempo queremos (cada que velocidad queremos que se haga)5000 son 5 segundos
        
        return tiempo;

    }
    // timer
    //setTimeOut que solo se repite una vez no hace un buclie a diferencia de set interval
    var tiempo = intervalo();
    var stop = document.querySelector('#stop');
    stop.addEventListener('click', () => {
        alert('has parado el set interval')
        clearInterval (tiempo);
    })

    var start = document.querySelector('#start');
    start.addEventListener('click', () => {
        intervalo()
    })







}); // end load 



