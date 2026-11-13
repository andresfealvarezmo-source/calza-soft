const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir la carpeta uploads para que las imágenes sean públicas
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({ mensaje: 'Bienvenido a la API Backend de Calza Soft' });
});

app.listen(PORT, () => {
    console.log(`Servidor de Calza Soft ejecutándose en el puerto ${PORT}`);
});

module.exports = app;   