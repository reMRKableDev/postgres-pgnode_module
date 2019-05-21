/* Read from the connection established in the config file under db folder */
const pool = require("../../db/create-config.js");

/* 
Write using Query Parameters with input from command line. 
Both queries below achieve the same thing.
- The first one uses a Callback function.
- The second one uses Promises 
*/

// Calback
/* pool.query(
  "insert into hats (name, material, height, brim) values($1, $2, $3, $4)",
  process.argv.splice(2),
  (err, results) => {
    console.log(err ? err.stack : `${results.command}: ${results.rowCount}`);
  }
); */

// Promise
pool
  .query(
    "insert into hats (name, material, height, brim) values($1, $2, $3, $4)",
    process.argv.splice(2)
  )
  .then(results => console.log(`${results.command}: ${results.rowCount}`))
  .catch(error => console.error(error.stack));

pool.end();
