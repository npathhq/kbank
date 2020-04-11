const uuid = require('uuid');
const faker = require('faker');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'kbank',
  password: 'password',
  port: 5432,
});

const id = uuid.v4();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();
const hashPassword = bcrypt.hashSync(password, 10);
const refreshToken = jwt.sign({ id }, 'secret');

const query = {
  text: 'INSERT INTO users VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
  values: [id, firstName, lastName, username, email, hashPassword, refreshToken],
};

const main = async () => {
  try {
    // Add user to database
    await pool.query(query);

    // Gets the list of users
    const users = await pool.query('SELECT * FROM users');
    console.table(users.rows);
  } catch (err) {
    console.log(err.stack);
  }
}

main();
