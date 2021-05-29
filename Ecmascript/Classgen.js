class calculator { 
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB; 
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//módulos 

import {hello} from './modulo';

hello();

//generators

function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
//lo llamamos 3 veces porque con el primero él lo que hace es que trae el valor del primer if, pero no del segundo, no ejecuta completo todo el programa, con el segundo traemos el segundo if y el último es para demostrar lo anterior, cómo no está en nuestro código un tercer step lo que hace es undefined 
