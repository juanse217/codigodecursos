var num = 1;

switch(num)
{
    case 1:
        console.log("soy uno");
        break;
    case 10:
        console.log("no soy, soy 10");
        break;
    case 100:
        console.log("soy un 100");
        break;
    default: 
    console.log("no soy");
}


var a1 = "papel"
var a2 = "piedra"
var a3 = "tijeras"

switch(user, pc, a1, a2, a3)
{
    case ( user == a2 && pc == a3):
        console.log("gana user");
        break;

    case (user == a1 && pc == a2):
        console.log("gana user");
        break;
    case (user == a3 && pc == a1):
        console.log("gana user");
        break;
    
    case (user === pc):
        console.log("empate");
        break;
}