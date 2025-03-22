import { useState, useRef } from "react";
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
                            <Link to="#" aria-label="Ver página de " className="TipoLink">
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
                                    <li><Link to="#"> Notas de Frequência </Link></li>
                                    <li><Link to="#"> Exames </Link></li>
                                    <li><Link to="#"> Situação Financeira </Link></li>
                                    <li><Link to="#"> Avaliação do Corpo Docente </Link></li>
                                    <li><Link to="#"> Inscrições </Link></li>
                                    <li><Link to="#"> Horários </Link></li>
                                    <li><Link to="#"> Material Acadêmico </Link></li>
                                    <li><Link to="#"> Pagamento de Emolumentos </Link></li>
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
