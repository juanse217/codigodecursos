//primero vamos a ve cómo se hacían las funciones antes 
function newFunction(name, age, country){
    var name = name || "oscar";
    var age = age || 34;
    var country = country || "Colombia";
    console.log(name, age, country);
};

//como se hace ahora con es6+ 
function newFunction2(name = "oscar", age = 34, country = "colombia"){
    console.log(name, age, country);
};

newFunction2();
newFunction2("ricardo", '23', 'colombia');

//ahora las concatenaciones en javasript y cómo se hace en es6 

//js 

let hello = "hello"
let world = "world"
let epicPhrase = hello + "" + world;
console.log(epicPhrase);

//ahora con templates (es6)

let epic2 = `${hello} ${world}`;
console.log(epic2);