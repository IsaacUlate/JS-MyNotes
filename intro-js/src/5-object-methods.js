

const invoice = {
    id: 10,
    name: 'Products',
    date: new Date(),
    client: {
        id:2,
        name: 'Juan',
        age: 30,
    },
    total: 1200,
    greeting: function(){
        return `Hola ${this.client.name}`;
    }
};

invoice.client.name = 'Rodri';
console.log(invoice);

console.log(invoice.greeting());
