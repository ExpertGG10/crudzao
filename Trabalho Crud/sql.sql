CREATE DATABASE IF NOT EXISTS crudzao;
USE crudzao;

CREATE TABLE IF NOT EXISTS musicas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  duracao TIME NOT NULL,
  anoLancamento YEAR NOT NULL,
  banda VARCHAR(100) NOT NULL,
  genero VARCHAR(100) NOT NULL
);

INSERT INTO musicas (nome, duracao, anoLancamento, banda, genero)
VALUES ('Bridge Over Troubled Water', "00:04:53", 1970, 'Simon & Garfunkel', 'Folk Rock'),
('Holy Diver', "00:05:40", 1983, 'Dio', 'Heavy Metal'),
('1979', "00:04:26", 1995, 'The Smmusicasmusicasashing Pumpkins', 'Rock Alternativo'),
('Hysteria', "00:03:47", 2003, 'Muse', 'Rock'),
('Motion Sickness', "00:03:49", 2017, 'Phoebe Bridgers', 'Indie Rock');
