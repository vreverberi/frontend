import './App.css';
import './styles/Normalize.css';
// import './styles/rosailing.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ViajesPage from './pages/ViajesPage';
import GaleriaPage from './pages/GaleriaPage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="viajes" element={<ViajesPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="contacto" element={<ContactoPage />} />

        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
