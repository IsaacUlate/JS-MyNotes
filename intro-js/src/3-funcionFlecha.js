

const sayHiPersonal = (name, age = 0) =>`hola ${name} edad ${age}`;

const plus = (a = 0,b = 0) => a+b;

console.log(sayHiPersonal('Acute', 20));
console.log(plus(30,10));