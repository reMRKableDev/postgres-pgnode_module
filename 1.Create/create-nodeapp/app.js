/* Read from the connection established in the config file under db folder */
const pool = require("../../db/create-config.js");

/* 
Both queries below achieve the same thing. 
- The first one uses a Callback function. 
- The second one uses Promises */

// Callback
/* pool.query(
  `insert into hats (name,material,height,brim) values('cowboy', 'straw', '4', true)`,
  (error, results) => {
    console.log(error ? error.stack : `${results.command}: ${results.rowCount}`);
  }
); */

// Promise
pool
  .query(
    `insert into hats (name,material,height,brim) values('cowboy', 'straw', '4', true)`
  )
  .then(results => console.log(`${results.command}: ${results.rowCount}`))
  .catch(error => console.error(error.stack));

/* End pooling when query is done. */
pool.end();
