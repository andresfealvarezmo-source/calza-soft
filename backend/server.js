const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Middlewares esenciales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar las rutas independientes de la API bajo el prefijo /api
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Servir archivos estáticos del frontend (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta de estado de la API
app.get('/api/status', (req, res) => {
  res.json({ mensaje: "¡Bienvenido a la API Backend de Calza Soft!" });
});

// Ruta comodín para que el frontend cargue siempre las vistas correctamente
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/login.html'));
});

// Configuración del puerto para Render o entorno local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});