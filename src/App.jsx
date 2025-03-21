import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Portal from "../src/pages/portal/Portal";
import HeaderSecundario from './components/layout/headersecundario/HeaderSecundario';
function App() {
  return (
    <Router>

      <section className="Raiz">

        <Header />

        <main>

          <HeaderSecundario />

          <Routes>
            <Route path="/Portal" element={<Portal />} />
          </Routes>
          
        </main>

      </section>
    </Router>
  );
}

export default App
