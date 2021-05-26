var carro = {
    marca: "Ford",
    modelo: "fiesta",
    year: "2021",
    detalleCarro: function()
    {
        console.log(`Auto ${this.modelo} ${this.year }`)
    }
};


carro.marca;


carro.detalleCarro();