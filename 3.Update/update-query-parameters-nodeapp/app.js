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

// Update value in DB.
client.query(`update hats set height = $1 where name = $2`, [20, 'bowler'], (error, result) => {
    console.log(error ? error.stack : `${result.command}: ${result.rowCount}`);
    client.end();
});
