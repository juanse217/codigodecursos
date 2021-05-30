//promesa
const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true) ? setTimeout(() => resolve('hello world'), 3000) : reject(new Errror('Test Errror'))
    })
}

//Async await
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunct = async () =>{
    try{
        const hello = await helloWorld(); 
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunct();