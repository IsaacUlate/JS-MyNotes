

const invoice = {
    id: 10,
    name: 'Compras oficina',
    date: new Date(),
    client: {
        id:2,
        name: 'Juan',
        age: 30,
    },
    total: 1200,
};

invoice.client.name = 'Rodri';

console.log(invoice);
