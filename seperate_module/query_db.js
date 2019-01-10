const {
    Client
} = require('pg')
const client = new Client({
    database: 'postgres',
    host: 'localhost',
    user: 'malcolmkente' // also 'password:' if you have one setup
})


client.connect()

function work(queryString, queryParameters) {
    if (typeof queryParameters == undefined) { // normalize parameters
        queryParameters = [];
    }

    client.query(queryString, queryParameters, (err, result) => {

        console.log(err ? err.stack : result.rows);
        client.end();
    });

}

module.exports = {
    work: work
}
