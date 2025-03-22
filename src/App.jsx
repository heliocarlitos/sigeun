import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Portal from "../src/pages/portal/Portal";
import HeaderSecundario from './components/layout/headersecundario/HeaderSecundario';
import Entrar from './pages/entrar/Entrar';
import VerificarLogin from './components/verificarlogin/VerificarLogin';
function App() {
  return (
    <Router>

      <VerificarLogin />

      <section className="Raiz">

        <Header />

        <main>

          <HeaderSecundario />

          <Routes>
            <Route path="/Portal" element={<Portal />} />
            <Route path="/Entrar" element={<Entrar />} />
          </Routes>

        </main>

      </section>
    </Router>
  );
}

export default App
