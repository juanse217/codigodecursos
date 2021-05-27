var articulos = [
    {nombre: "cleta",costo:300},
    {nombre:"Tele", costo: 2400},
    {nombre: "libro", costo: 100},
    {nombre: "celular", costo: 2000},
    {nombre: "pc", costo: 30000},
    {nombre: "Teclado", costo: 1203},
    {nombre: "Audífonos", costo: 6000},
]


var articulosFiltrados = articulos.filter(function(articulo){
return articulo.costo >= 1240
});

articulosFiltrados();


var nombreArts = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArts();

var findArticle = articulos.find(function(articulo){
    return articulo.nombre === "Teclado"
});

findArticle();



articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


var someArts = articulos.some(function(articulo){
    return articulo.costo <= 2000
});

someArts();