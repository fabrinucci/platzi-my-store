const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'bosti',
    password: 'admin123',
    database: 'platzi-my-store'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;