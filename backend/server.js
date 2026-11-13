const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Montar las rutas de la API bajo el prefijo /api
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/status', (req, res) => {
  res.json({ mensaje: "API de Calza Soft funcionando correctamente en Render" });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/login.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});