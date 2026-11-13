const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

// Esto forzará al servidor a probar la conexión a Aiven apenas encienda
connection.connect((err) => {
  if (err) {
    console.error('❌ ERROR CRITICO DE CONEXION A AIVEN:', err);
    return;
  }
  console.log('✅ ¡CONECTADO EXITOSAMENTE A LA BASE DE DATOS EN LA NUBE (AIVEN)!');
});

module.exports = connection;