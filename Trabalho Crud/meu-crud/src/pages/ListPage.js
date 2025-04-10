import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Title, ErrorMessage, MusicList, MusicItem, StyledLink } from './stylelist';

function ListPage() {
  const [musicas, setMusicas] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/musicas')
      .then(response => setMusicas(response.data))
      .catch(err => setError('Erro ao carregar dados.'));
  }, []);

  return (
    <Container>
      <Title>Listagem de Músicas</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledLink to="/form">Adicionar Nova Música</StyledLink>
      <MusicList>
        {musicas.map(musica => (
          <MusicItem key={musica.id}>
            <StyledLink to={`/musicas/${musica.id}`}>{musica.nome} - {musica.anoLancamento}</StyledLink>
          </MusicItem>
        ))}
      </MusicList>
    </Container>
  );
}

export default ListPage;