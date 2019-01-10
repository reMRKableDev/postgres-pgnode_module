// Client setup (alternative-way is in alternatives.txt file).
const {
    Client
} = require('pg');

const client = new Client({
    database: 'postgres',
    host: 'localhost',
    user: 'malcolmkente' // also password if you have it setup
});

// Connect client (alternative-way is in alternatives.txt file).
client.connect();

// Write from DB (alternative-way is in alternatives.txt file).
client.query(`insert into hats (name,material,height,brim,price) values('cowboy', 'straw', '4', true, 100)`, (error, result) => {
    console.log(error ? error.stack : `${result.command}: ${result.rowCount}`);
    client.end();
});
