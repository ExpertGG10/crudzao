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

export const Info = styled.p`
  margin: 5px 0;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;