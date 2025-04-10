// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// server.js (adicionar ao final)
const itemRoutes = require('./routes/musicas');
app.use('/api', itemRoutes);