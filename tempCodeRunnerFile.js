const { Pool } = require('pg');
 
const pool = new Pool({
  user: 'postgre',
  host: 'localhost',
  database: 'QLDA',
  password: 'tucmgdtntg',
  port: 5432,
})

console.log(pool.query('SELECT NOW()'))