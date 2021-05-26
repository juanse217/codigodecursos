function car(marca, modelo, year)
{
    this.marca = marca;
    this.modelo = modelo;
    this.year = year; 
}

var car2 = new car("Toyota", "modelo 3", 2021);

var car3 = new car("mazda", "cx5", 1991);




//reto

for(var i = 0; i<10; i++)
{
    var marca = prompt("ingresa la marca de tu auto mor");
    var modelo = prompt("ingesa el modelo del carro bb");
    var year = prompt("ingresa el año de el carro beibi");

    car.push(new auto(marca, modelo, year));
}
