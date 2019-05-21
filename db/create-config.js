/* 
Requiring the dotenv package to read environment variables from the .env file located at the root of your project. 
OBS: There needs to be a .env at the root of your project inorder for this to take effect */
require("dotenv").config({ path: "../../.env" });

/* Setting up and configuring the pool to environment varibles set in the .env file. */
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

pool.connect();

/* Exporting the pool allows access to it in other files. */
module.exports = pool;
