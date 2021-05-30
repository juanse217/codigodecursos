
const data = { 
    frontend: 'oscar',
    backend: "Isabel",
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object values 

const data = { 
    frontend: 'oscar',
    backend: "Isabel",
    design: 'Ana',
};
const values = Object.values(data);
console.log(values);
//console.log(values.length) también podemos hacer esto y nos va a mostrar cuántos elementos hay dentro del array 


//padding 

const str = 'hello';
console.log(str.padStart(7, 'hi'));
console.log(str.padEnd(12,'juanse'));


//trailing comas 
const obj = { 
    nombre: 'oscar',
}