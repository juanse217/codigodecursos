
let nombre = "oscar";
let age = "32";

//javascript normal
objeto = { nombre: nombre , age: age};

//es6
obj2 = { nombre, age};

console.log(obj2);

 //arrow functions.

const  names = [
    {nombre: 'Oscar', age:32},
    {nombre: 'Yesica', age: 27}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
});

//es6 arrow funcnction reales

let listOfNames2 = names.map(item => console.log (ittem))


const listOfNames3 = (nombre, age, country) => {
    ////
}

const listOfNames4 = nombre => {
    ////
}

const square = number => num * num;

//promises (asincrónismo)

const helloPromise = ()=>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('hey');
        } else{
            reject('ups');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error)); 