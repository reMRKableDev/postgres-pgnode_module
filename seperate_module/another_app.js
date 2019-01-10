const query = require('./query_db');

query.work('insert into hats values($1, $2, $3, $4, $5)', ['cap', 'polyester', 12, false, 43]);
