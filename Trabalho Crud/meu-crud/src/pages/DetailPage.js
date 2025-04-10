import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, Info, Button, StyledLink } from './styledetail';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [musica, setMusica] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`/api/musicas/${id}`)
      .then(response => setMusica(response.data))
      .catch(err => setError('Erro ao carregar detalhes.'));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`/api/musicas/${id}`)
      .then(() => navigate('/'))
      .catch(() => setError('Erro ao deletar música.'));
  };

  if (error) return <p>{error}</p>;
  if (!musica) return <p>Carregando...</p>;

  return (
    <Container>
      <Title>{musica.nome}</Title>
      <Info><strong>Duração:</strong> {musica.duracao}</Info>
      <Info><strong>Ano de Lançamento:</strong> {musica.anoLancamento}</Info>
      <Info><strong>Banda:</strong> {musica.banda}</Info>
      <Info><strong>Gênero:</strong> {musica.genero}</Info>

      <Button onClick={handleDelete}>Excluir</Button>
      <StyledLink to={`/form/${id}`}>
        <Button>Editar</Button>
      </StyledLink>
    </Container>
  );
}

export default DetailPage;