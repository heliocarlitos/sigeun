import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser, CiMail, CiBellOn, CiViewTimeline, CiCircleQuestion, CiSettings, CiGrid41, CiAlignBottom, CiWarning } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import "./Header.css";
import user_1 from "../../../assets/image/usuarios/user_1.webp";

function Header() {
    const [mostrarPerfil, setMostrarPerfil] = useState(false);
    const [mostrarMenuMobile, setMostrarMenuMobile] = useState(false);
    const [mostrarPopover, setMostrarPopover] = useState(false);
    const navigate = useNavigate();

    const togglePerfil = () => setMostrarPerfil((prev) => !prev);
    const toggleMenuMobile = () => setMostrarMenuMobile((prev) => !prev);
    const confirmarSaida = () => {
        localStorage.removeItem("usuarioLogado");
        setMostrarPopover(false);
        navigate("/Entrar");
    };

    useEffect(() => {
        function fecharAoClicarFora(event) {
            fecharPerfil(event);
            if (mostrarMenuMobile && !event.target.closest(".MenuMobile") && !event.target.closest(".BtnMenuMobile")) {
                setMostrarMenuMobile(false);
            }
        }
        document.addEventListener("mousedown", fecharAoClicarFora);
        return () => document.removeEventListener("mousedown", fecharAoClicarFora);
    }, [mostrarPerfil, mostrarMenuMobile]);

    function fecharPerfil(event) {
        if (mostrarPerfil && !event.target.closest(".Perfil") && !event.target.closest(".PerfilBotao")) {
            setMostrarPerfil(false);
        }
    }

    return (
        <header className="Header PaddingInline">
            <nav className="Links">
                <Link to="/" className="Logo">Sigeun <span>v1.0</span></Link>
                <div className="Btn">
                    <button className="PerfilBotao" onClick={togglePerfil}>
                        <figure><img src={user_1} width={35} height={35} alt="Foto de perfil" /></figure>
                        <div className="Icon"><IoIosArrowDown /></div>
                    </button>
                    <button className="BtnMenuMobile" onClick={toggleMenuMobile}>
                        {mostrarMenuMobile ? <IoMdClose /> : <HiMenuAlt4 />}
                    </button>
                </div>
            </nav>

            {mostrarPerfil && (
                <div className="Perfil">
                    <div className="Info">
                        <figure><img src={user_1} width={35} height={35} alt="Foto de perfil" /></figure>
                        <div className="Detalhes">
                            <p className="NomeDoUsuario">Hélio Carlitos António</p>
                            <p className="Usuario">08.0791.2027</p>
                        </div>
                    </div>
                    <div className="LinhaX"></div>
                    <nav>
                        <ul>
                            <li onClick={() => setMostrarPerfil(false)}><Link to="/DadosPessoais"><div className="Icon"><CiUser /></div><p>Dados pessoais</p></Link></li>
                            <li onClick={() => setMostrarPerfil(false)}><Link to="/Mensagem"><div className="Icon"><CiMail /></div><p>Mensagem</p></Link></li>
                            <li onClick={() => setMostrarPerfil(false)}><Link to="/Notificacoes"><div className="Icon"><CiBellOn /></div><p>Notificações</p></Link></li>
                            <li onClick={() => setMostrarPerfil(false)}><Link to="/DocumentosUteis"><div className="Icon"><CiViewTimeline /></div><p>Documentos Úteis</p></Link></li>
                            <li onClick={() => setMostrarPerfil(false)}><Link to="/Faq"><div className="Icon"><CiCircleQuestion /></div><p>FAQ</p></Link></li>
                            <li onClick={() => setMostrarPerfil(false)}><Link to="/Configuracoes"><div className="Icon"><CiSettings /></div><p>Configurações</p></Link></li>
                            <li onClick={() => { setMostrarPopover(true); setMostrarPerfil(false); }}><button>Sair</button></li>
                        </ul>
                    </nav>
                </div>
            )}

            {mostrarPopover && (
                <div className="Popover PaddingInline">
                    <div className="Box">
                        <div className="Info">
                            <div className="Icon"><CiWarning /></div>
                            <p>Tem certeza que deseja sair?</p>
                        </div>
                        <div className="Btn">
                            <button onClick={confirmarSaida}>Sair</button>
                            <button onClick={() => setMostrarPopover(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={`MenuMobile ${mostrarMenuMobile ? "ativo" : ""}`}>
                <div className="Titulo"><p>Menu do Sistema</p></div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="TipoLink" onClick={toggleMenuMobile} aria-label="Ver página de Dashboard">
                                <div className="Icon"><CiGrid41 /></div>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <details>
                                <summary className="TipoLink">
                                    <div className="Icon"><CiAlignBottom /></div>
                                    <p>Portal do Estudante</p>
                                </summary>
                                <ul className="Lista">
                                    <li><Link to="/NotasDeFrequencia" onClick={toggleMenuMobile}>Notas de Frequência</Link></li>
                                    <li><Link to="/Exames" onClick={toggleMenuMobile}>Exames</Link></li>
                                    <li><Link to="/SituacaoFinanceira" onClick={toggleMenuMobile}>Situação Financeira</Link></li>
                                    <li><Link to="/AvalicaoDoCorpoDocente" onClick={toggleMenuMobile}>Avaliação do Corpo Docente</Link></li>
                                    <li><Link to="/Inscricoes" onClick={toggleMenuMobile}>Inscrições</Link></li>
                                    <li><Link to="/Horarios" onClick={toggleMenuMobile}>Horários</Link></li>
                                    <li><Link to="MaterialAcademico" onClick={toggleMenuMobile}>Material Acadêmico</Link></li>
                                    <li><Link to="/PagamentoDeEmulamentos" onClick={toggleMenuMobile}>Pagamento de Emolumentos</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
