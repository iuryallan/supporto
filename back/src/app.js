require("dotenv").config();
const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');


const app = express();


app.use(express.json()); // Permite JSON no body das requisições
app.use('/usuarios', usuarioRoutes);


module.exports = app;
