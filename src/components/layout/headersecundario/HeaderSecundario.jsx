import { useState, useRef } from "react";
import "./HeaderSecundario.css";
import { Link } from "react-router-dom";
import { CiGrid41, CiAlignBottom } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";

function HeaderSecundario() {
    const [minimizado, setMinimizado] = useState(false);
    const [detalheAberto, setDetalheAberto] = useState(false);
    const detailsRef = useRef(null);

    // 🔹 Abre o menu (sem fechar os detalhes)
    const abrirMenu = () => {
        setMinimizado(false);
    };

    // 🔹 Fecha o menu e sempre encolhe os detalhes
    const fecharMenu = () => {
        if (detailsRef.current) {
            detailsRef.current.removeAttribute("open");
        }
        setDetalheAberto(false);
        setMinimizado(true);
    };

    // 🔹 Abre o menu quando um detalhe for clicado
    const abrirMenuComDetalhe = () => {
        setMinimizado(false);
        setDetalheAberto(true);
    };

    return (
        <>
            <div className={`HeaderSecundario ${minimizado && !detalheAberto ? "minimizado" : ""}`}>
                <div className="Titulo">

                    <p> Menu do Sistema </p>

                    <button className="IconFechar" onClick={minimizado ? abrirMenu : fecharMenu}>
                        {minimizado ? <HiMenuAlt4 /> : <IoMdClose />}
                    </button>
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
                            <details 
                                ref={detailsRef} 
                                name="TipoLink" 
                                onClick={abrirMenuComDetalhe}
                                onToggle={(e) => setDetalheAberto(e.target.open)}
                            >
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
