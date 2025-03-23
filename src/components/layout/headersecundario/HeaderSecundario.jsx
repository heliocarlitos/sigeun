import "./HeaderSecundario.css";
import { Link } from "react-router-dom";
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
                            <Link to="/" aria-label="Ver página de Dashboard" className="TipoLink">

                                <div className="Icon">
                                    <CiGrid41 />
                                </div>

                                <p> Dashboard </p>

                            </Link>
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

                                    <li><Link to="/NotasDeFrequencia" aria-label="Vert página de  Notas de Frequência"> Notas de Frequência </Link></li>

                                    <li><Link to="/Exames" aria-label="Vert página de Exames"> Exames </Link></li>

                                    <li><Link to="/SituacaoFinanceira" aria-label="Vert página de Situação Financeira"> Situação Financeira </Link></li>

                                    <li><Link to="/AvalicaoDoCorpoDocente" aria-label="Vert página de  Avaliação do Corpo Docente"> Avaliação do Corpo Docente </Link></li>

                                    <li><Link to="/Inscricoes" aria-label="Vert página de Inscrições"> Inscrições </Link></li>

                                    <li><Link to="/Horarios" aria-label="Vert página de Horários"> Horários </Link></li>

                                    <li><Link to="MaterialAcademico" aria-label="Vert página de Material Acadêmico"> Material Acadêmico </Link></li>

                                    <li><Link to="/PagamentoDeEmulamentos" aria-label="Vert página de Pagamento de Emolumentos"> Pagamento de Emolumentos </Link></li>

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
