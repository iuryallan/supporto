const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes')
const evClinicaRoutes = require('./routes/evClinicaRoutes')
const grupoApoioRoutes = require('./routes/grupoApoioRoutes')
const atendimentoRoutes = require('./routes/atendimentoRoutes')
const depoimentoRoutes = require('./routes/depoimentoRoutes')

const app = express();


app.use(express.json());
app.use('/usuarios', usuarioRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/pacientes', pacienteRoutes);
app.use('/evClinicas', evClinicaRoutes);
app.use('/gruposDeApoio', grupoApoioRoutes);
app.use('/atendimentos', atendimentoRoutes);
app.use('/depoimentos', depoimentoRoutes);

module.exports = app;
