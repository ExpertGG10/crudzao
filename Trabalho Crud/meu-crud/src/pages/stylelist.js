import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Certifique-se de que isso está presente

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
`;

export const Title = styled.h1`
  color: #444;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

export const MusicList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MusicItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;