const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false // Obligatorio para conectar con Aiven en la nube
  }
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos en la nube: ' + err.stack);
    return;
  }
  console.log('¡Conectado exitosamente a la base de datos de Aiven! ID: ' + connection.threadId);
});

module.exports = connection;