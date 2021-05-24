var a1 = "piedra"
var a2 = "papel"
var a3 =  "tijera"

var juego = function(player, pc)
{
    if(player != pc)
    {
        if(player == a2 && pc == a1)
        {
            console.log("gana user")
        }
        else if(player ==a3 && pc == a2 )
        {
            console.log("gana user")
        }
        else if( player == a3 && pc == a1)
        {
            console.log("gana user")
        }
        else if( user === cpu)
        {
            console.log("empate mor")
        }
        
    }

}

juego(a2, a1);