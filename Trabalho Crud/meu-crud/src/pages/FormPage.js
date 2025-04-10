import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Title, Button, Input } from './styleform'; // Importar componentes estilizados

function FormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    duracao: '',
    anoLancamento: '',
    banda: '',
    genero: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`/api/musicas/${id}`)
        .then(response => setFormData(response.data))
        .catch(err => setError('Erro ao carregar dados.'));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id ? `/api/musicas/${id}` : '/api/musicas';

    axios[method](url, formData)
      .then(() => navigate('/'))
      .catch(() => setError('Erro ao salvar dados.'));
  };

  const handleDelete = () => {
    axios.delete(`/api/musicas/${id}`)
      .then(() => navigate('/'))
      .catch(() => setError('Erro ao deletar item.'));
  };

  return (
    <Container>
      <Title>{id ? 'Editar' : 'Cadastrar'} Música</Title>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <Input
          type="text"
          name="duracao"
          value={formData.duracao}
          onChange={handleChange}
          placeholder="Duração"
          required
        />
        <Input
          type="text"
          name="anoLancamento"
          value={formData.anoLancamento}
          onChange={handleChange}
          placeholder="Ano de Lançamento"
          required
        />
        <Input
          type="text"
          name="banda"
          value={formData.banda}
          onChange={handleChange}
          placeholder="Banda"
          required
        />
        <Input
          type="text"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          placeholder="Gênero"
          required
        />
        <Button type="submit">Salvar</Button>
        {id && <Button type="button" onClick={handleDelete}>Deletar</Button>}
      </form>
    </Container>
  );
}

export default FormPage;