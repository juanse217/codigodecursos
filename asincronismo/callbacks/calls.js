
function sum(numx, numy){
    return numx + numy;
}


function calc(numx, numy, callback){
    return callback(numx, numy);
}


console.log(calc(2,5, sum));
//acá lo que hacemos es que le pasamos nuestros 2 valores y luego le pasamos la función para que ejecute esa función, en conclusión esos valores pasan a sum y estos pasan a calc y esta los imprime (creo que por el callback)




function date(callback){
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

//lo que hicimos acá fue que en la primera función mandamos una función donde metimos el callback como argumento, luego colocamos el console.log de nuestra fecha,  y colocamos un temporizador y le metimos una arrow function donde metimos el callback cd la variable date y lepusimos su tiempo y abajo llamamos la función date con printDate como argumento (que pasaría a ser el callback). Este cóldigo me imprime dos fechas