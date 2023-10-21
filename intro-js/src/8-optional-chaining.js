

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

console.log(invoice.company?.name)
console.log(invoice.client?.address?.street)

if (invoice.company?.name) {
    console.log('nice')
}else{
    console.log('no info')
}

if (invoice.client?.address?.street) {
    console.log('nice')
}else{
    console.log('no info')
}