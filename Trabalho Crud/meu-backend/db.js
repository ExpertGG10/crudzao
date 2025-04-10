const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudzao'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

module.exports = connection;