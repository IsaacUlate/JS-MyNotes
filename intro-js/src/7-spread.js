

const invoice = {
    id: 10,
    name: 'Products',
    date: new Date(),
    client: {
        id:2,
        name: 'Juan',
        age: 30,
    },
    items: [
        {
            product: 'Keyboard',
            price: 32000,
            quantity: 1
        },
        {
            product: 'Headset',
            price: 15000,
            quantity: 2
        }
    ],
    total: function() {
        let total = 0;
        this.items.forEach(item => {

            total = total + item.price * item.quantity;

        });
        return total;
    },
    greeting: function(){
        return `Hola ${this.client.name}`;
    }
};

invoice.client.name = 'Rodri';
console.log(invoice);

console.log(invoice.greeting());
console.log(`Total: ${invoice.total()}`);


const invoice2 = {...invoice}; //spread (...)
const result = invoice === invoice2;

if (result) console.log(result);
else console.log('No son iguales');

invoice2.id = 20;

console.log(invoice.id);
console.log(invoice2.id);