const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');

const app = express();


app.use(express.json()); // Permite JSON no body das requisições
app.use('/usuarios', usuarioRoutes);
app.use('/profissionais', profissionalRoutes)

module.exports = app;
