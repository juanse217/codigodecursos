const obj = {
    nombre: 'oscar',
    age: 32,
    country: 'MX'
};


//operador de reposo (el spread operator utilizado de otra manera)

let {nombre, ...all} = obj;
console.log(nombre, all);


//para llamar una propiedad de un objeto sin desestructurar todas las propiedades. 

let {country, ...all} = obj;
console.log( all); //aquí lo que hacemos es llmara sólo a all para que no se imprima country, sólo nombre y age 


//USANDO EL SPREAD operator podemos unir la cantidad de elementos que deseemos

const obj1 = {
    nombre: 'Oscar',
    age: 32,
};

const obj2 = {
    ...obj1,
    country: 'POLOMBIA',
};

//promise.finally

const helloWord = ()=> {
    return new Promise ((resolve, reject)=>{
    (true) ? setTimeout(()=> resolve('helloWorld'),3000): reject(new Error('test error'))
    });
};

//desde el hello word y los .then y .catch no se pone ; entre estos. 

helloWord()
.then(response => console.log(response))
.cathc(error => console.log(error))
.finally(() => console.log('finalizó mor'))


//mejoras de los rejects agrupando regex en bloques y entrar a cada uno regex son de las expresiones regulares (toca hacer curso)  .exec es para que se ejecute

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);






