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

// Read using Query Parameters with input from command line.
client.query(`select * from hats where user_id = (select (id) from users where name = $1 )`, process.argv.splice(2), (error, result) => {
    console.log(error ? error.stack : result.rows) //
    client.end();
});
