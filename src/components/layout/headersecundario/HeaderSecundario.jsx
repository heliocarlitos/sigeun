import "./HeaderSecundario.css";
// import { Link } from "react-router-dom";
import { CiGrid41, CiAlignBottom } from "react-icons/ci";

function HeaderSecundario() {

    return (
        <>
            <div className="HeaderSecundario">

                <div className="Titulo">
                    <p> Menu do Sistema </p>
                </div>

                <nav>

                    <ul>

                        <li>
                            <a href="/" aria-label="Ver página de Dashboard" className="TipoLink">

                                <div className="Icon">
                                    <CiGrid41 />
                                </div>

                                <p> Dashboard </p>

                            </a>
                        </li>

                        <li>
                            <details name="TipoLink">

                                <summary className="TipoLink">

                                    <div className="Icon">
                                        <CiAlignBottom />
                                    </div>

                                    <p> Portal do Estudante </p>

                                </summary>

                                <ul className="Lista">

                                    <li><a href="/NotasDeFrequencia" aria-label="Vert página de  Notas de Frequência"> Notas de Frequência </a></li>

                                    <li><a href="/Exames" aria-label="Vert página de Exames"> Exames </a></li>

                                    <li><a href="/SituacaoFinanceira" aria-label="Vert página de Situação Financeira"> Situação Financeira </a></li>

                                    <li><a href="/AvalicaoDoCorpoDocente" aria-label="Vert página de  Avaliação do Corpo Docente"> Avaliação do Corpo Docente </a></li>

                                    <li><a href="/Inscricoes" aria-label="Vert página de Inscrições"> Inscrições </a></li>

                                    <li><a href="/Horarios" aria-label="Vert página de Horários"> Horários </a></li>

                                    <li><a href="MaterialAcademico" aria-label="Vert página de Material Acadêmico"> Material Acadêmico </a></li>

                                    <li><a href="/PagamentoDeEmulamentos" aria-label="Vert página de Pagamento de Emolumentos"> Pagamento de Emolumentos </a></li>

                                </ul>

                            </details>

                        </li>

                    </ul>

                </nav>

            </div>
        </>
    );
}

export default HeaderSecundario;
