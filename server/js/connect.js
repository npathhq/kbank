const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'kbank',
  password: 'password',
  port: 5432,
})
