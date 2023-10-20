
function sayHi(){

    const greeting = "hola";
    return greeting;
}

function sayHiPersonal(name, age = 0){
    
    const greeting = `hola ${name} edad ${age}`;
    return greeting;
}

console.log(sayHi());

console.log(sayHiPersonal('Acute', 20));