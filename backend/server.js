const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Middlewares esenciales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Servir archivos estáticos del frontend (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, '../frontend')));

// 2. Ruta de prueba o estado de la API Backend
app.get('/api/status', (req, res) => {
  res.json({ mensaje: "¡Bienvenido a la API Backend de Calza Soft!" });
});

// 3. Ruta principal: Al entrar a la web en la nube, carga directamente el login
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/login.html'));
});

// 4. Ruta comodín por si navegan a cualquier otra URL interna del frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/login.html'));
});

// Configuración del puerto para Render o local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});