import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";
import HeaderSecundario from './components/layout/headersecundario/HeaderSecundario';
import Entrar from './pages/entrar/Entrar';
import VerificarLogin from './components/verificarlogin/VerificarLogin';
import NotasDeFrequencia from './pages/notasdefrequencia/NotasDeFrequencia';
import DashBoard from './pages/dashboard/DashBoard';
import Exames from './pages/exames/Exames';
import SituacaoFinanceira from './pages/situacaofinanceira/SituacaoFinanceira';
import AvalicaoDoCorpoDocente from './pages/avalicaodocorpodocente/AvalicaoDoCorpoDocente';
import Inscricoes from './pages/inscricoes/Inscricoes';
import Horarios from './pages/horarios/Horarios';
import MaterialAcademico from './pages/materialacademico/MaterialAcademico';
import PagamentoDeEmulamentos from './pages/pagamentodeemulamentos/PagamentoDeEmulamentos';
import DadosPessoais from './pages/dadospessoais/DadosPessoais';
import Mensagem from './pages/mensagem/Mensagem';
import Notificacoes from './pages/notificacoes/Notificacoes';
import DocumentosUteis from './pages/documentosUteis/DocumentosUteis';
import Faq from './pages/faq/Faq';
import Configuracoes from './pages/configuracoes/Configuracoes';

function App() {

  return (

    <Router>

      <VerificarLogin />

      <section className="Raiz">

        <Header />
        <HeaderSecundario />
        <div className="Transgressor"></div>

        <main>

          <Routes>
            <Route path="/Entrar" element={<Entrar />} />
            <Route path="/" element={<DashBoard />} />
            <Route path="/NotasDeFrequencia" element={<NotasDeFrequencia />} />
            <Route path="/Exames" element={<Exames />} />
            <Route path="/SituacaoFinanceira" element={<SituacaoFinanceira />} />
            <Route path="/AvalicaoDoCorpoDocente" element={<AvalicaoDoCorpoDocente />} />
            <Route path="/Inscricoes" element={<Inscricoes />} />
            <Route path="/Horarios" element={<Horarios />} />
            <Route path="/MaterialAcademico" element={<MaterialAcademico />} />
            <Route path="/PagamentoDeEmulamentos" element={<PagamentoDeEmulamentos />} />
            <Route path="/DadosPessoais" element={<DadosPessoais />} />
            <Route path="/Mensagem" element={<Mensagem />} />
            <Route path="/Notificacoes" element={<Notificacoes />} />
            <Route path="/DocumentosUteis" element={<DocumentosUteis />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Configuracoes" element={<Configuracoes />} />

          </Routes>

        </main>

      </section>

    </Router>
  );
}

export default App
