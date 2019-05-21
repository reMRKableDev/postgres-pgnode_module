/* eslint-disable no-console */
/* Read from the connection established in the config file under db folder */
const pool = require("../../db/create-config.js");

/*
Both queries below achieve the same thing.
- The first one uses a Callback function.
- The second one uses Promises */

// Callback
/* pool.query(
  `select * from hats where user_id = (select (id) from users where name = $1 )`,
  process.argv.splice(2),
  (error, result) => {
    console.log(error ? error.stack : result.rows);
  }
); */

// Promise
pool
  .query(
    `select * from hats where user_id = (select (id) from users where name = $1 )`,
    process.argv.splice(2)
  )
  .then(results => console.log(results.rows))
  .catch(error => console.log(error.stack));

pool.end();
