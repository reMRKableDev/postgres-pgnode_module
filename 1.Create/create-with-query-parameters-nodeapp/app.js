/* Read from the connection established in the config file under db folder */
const pool = require("../../db/create-config.js");

/*
Write using Query Parameters with input from array passed in nodeapp.
Both queries below achieve the same thing.
- The first one uses a Callback function.
- The second one uses Promises
*/

// Callback
/* pool.query(
  "insert into hats (name, material, height, brim) values($1, $2, $3, $4)",
  ["cowboyyyys", "straw", "4", true],
  (err, result) => {
    console.log(err ? err.stack : `${result.command}: ${result.rowCount}`);
  }
); */

//Promise
pool
  .query(
    "insert into hats (name, material, height, brim) values($1, $2, $3, $4)",
    ["cowboyyyys", "straw", "4", true]
  )
  .then(results => console.log(`${results.command}: ${results.rowCount}`))
  .catch(error => console.error(error.stack));

pool.end();
