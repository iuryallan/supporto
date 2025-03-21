const express = require('express');
const cors = require('cors');  // Importando o CORS
const usuarioRoutes = require('./routes/usuarioRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const evClinicaRoutes = require('./routes/evClinicaRoutes');
const grupoApoioRoutes = require('./routes/grupoApoioRoutes');
const atendimentoRoutes = require('./routes/atendimentoRoutes');
const depoimentoRoutes = require('./routes/depoimentoRoutes');

const app = express();

// Usando o middleware CORS
app.use(cors());  // Permite que todas as origens acessem a API (caso queira restringir, veja a configuração abaixo)

// Configuração do body parser
app.use(express.json());

// Rotas da API
app.use('/usuarios', usuarioRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/pacientes', pacienteRoutes);
app.use('/evClinicas', evClinicaRoutes);
app.use('/gruposDeApoio', grupoApoioRoutes);
app.use('/atendimentos', atendimentoRoutes);
app.use('/depoimentos', depoimentoRoutes);

// Exportando a instância do app
module.exports = app;
