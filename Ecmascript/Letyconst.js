//////////////////// LET, CONST Y MULTILÍNEA, SPREAD OPERATOR Y DESESTRUCTURACIÓN 

let lorem ="quiero escribir una frase épicarda pibes \n"
+ "el pepe ete sechsiuiiu frase épicarda"


//manera de hacerlo en es6
let lorem2 = `otra frase épica qeu usamos el pepe
ahora es otra frase epicarda el pepe
`;

console.log(lorem);
console.log(lorem2);

//desestructuración 

let person = {
    'nombre': "oscar",
    'age': 32,
    'country': "mx"
};

console.log(person.name, person.age);

//lo siguiente es lo mismo de arriba, pero deu na manera mas sencilla
// lo que hacemos es entra en el objeto y buscar sus propiedades
//pero sin tener que colocar el nombre del objeto 

let {name, age} = person;
console.log(name, age);


// spread operator
 
let team1 = ['oscar', 'josé', 'pibardo'];
let team2 = ['culona', 'felipa', 'andrea'];

let education = ['David', ...team1, ...team2];

console.log(education);

//let y const 
{
var globar = "global var"
}


{
    let globallet = "Globarl let"
    console.log(globallet);
}

console.log(globar);
console.log(globallet);

//const

const a = "b";

a = "a"; 
console.log(a);