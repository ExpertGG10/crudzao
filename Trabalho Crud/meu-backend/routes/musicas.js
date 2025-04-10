const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/musicas', (req, res) => {
  connection.query('SELECT * FROM musicas', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.get('/musicas/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM musicas WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Música não encontrada' });
    }
    res.json(results[0]);
  });
});
router.post('/musicas', (req, res) => {
  const { nome, duracao, anoLancamento, banda, genero } = req.body;
  if (!nome || !duracao || !anoLancamento || !banda || !genero) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  const query = 'INSERT INTO musicas (nome, duracao, anoLancamento, banda, genero) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [nome, duracao, anoLancamento, banda, genero], (err, results) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ id: results.insertId });
  });
});

router.put('/musicas/:id', (req, res) => {
  const { id } = req.params;
  const { nome, duracao, anoLancamento, banda, genero } = req.body;
  const query = 'UPDATE musicas SET nome = ?, duracao = ?, anoLancamento = ?, banda = ?, genero = ? WHERE id = ?';
  connection.query(query, [nome, duracao, anoLancamento, banda, genero, id], (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ success: true });
  });
});

router.delete('/musicas/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM musicas WHERE id = ?';
  connection.query(query, [id], (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ success: true });
  });
});

module.exports = router;