/* eslint-disable no-console */
/* Read from the connection established in the config file under db folder */
const pool = require("../../db/create-config.js");

/*
Both queries below achieve the same thing.
- The first one uses a Callback function.
- The second one uses Promises */

// Callback : Make sure to change the name of the hat to something you have in your database.
/* pool.query(
  `update hats set height = 550 where name = 'snapback'`,
  (error, result) => {
    console.log(error ? error.stack : `${result.command}: ${result.rowCount}`);
  }
); */

// Promise: Make sure to change the name of the hat to something you have in your database.
pool
  .query(`update hats set height = 300 where name = 'snapback'`)
  .then(results => console.log(`${results.command}: ${results.rowCount}`))
  .catch(error => console.error(error.stack));

pool.end();
