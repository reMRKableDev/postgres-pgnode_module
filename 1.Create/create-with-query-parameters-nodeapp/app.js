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

// Write using Query Parameters with input from command line.
client.query('insert into hats (name, material, height, brim, price) values($1, $2, $3, $4, $5)', ['cowboyyyys', 'straw', '4', true, 104], (err, result) => {
    console.log(err ? err.stack : `${result.command}: ${result.rowCount}`);
    client.end();
});
