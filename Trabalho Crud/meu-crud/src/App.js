// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import FormPage from './pages/FormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/musicas/:id" element={<DetailPage />} />
        <Route path="/form/:id?" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
