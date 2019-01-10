// Client setup (alternative-way is in alternatives.txt file).
const {
    Client
} = require('pg');

const client = new Client({
    database: 'postgres',
    host: 'localhost',
    user: 'malcolmkente' // also password if you have it setup.
});

// Connect client (alternative-way is in alternatives.txt file).
client.connect();

// Read from DB (alternative-way is in alternatives.txt file).
client.query(`select * from hats`, (error, result) => {
    console.log(error ? error.stack : result.rows) //
    client.end();
});