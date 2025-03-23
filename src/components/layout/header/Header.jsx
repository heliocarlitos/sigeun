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

    const togglePerfil = () => {
        setMostrarPerfil((prev) => !prev);
    };

    const toggleMenuMobile = () => {
        setMostrarMenuMobile((prev) => !prev);
    };

    const confirmarSaida = () => {
        localStorage.removeItem("usuarioLogado");
        setMostrarPopover(false);
        navigate("/Entrar");
    };

    useEffect(() => {
        function fecharAoClicarFora(event) {
            if (mostrarPerfil && !event.target.closest(".Perfil") && !event.target.closest(".PerfilBotao")) {
                setMostrarPerfil(false);
            }
            if (mostrarMenuMobile && !event.target.closest(".MenuMobile") && !event.target.closest(".BtnMenuMobile")) {
                setMostrarMenuMobile(false);
            }
        }
        document.addEventListener("mousedown", fecharAoClicarFora);
        return () => {
            document.removeEventListener("mousedown", fecharAoClicarFora);
        };
    }, [mostrarPerfil, mostrarMenuMobile]);

    return (
        <header className="Header PaddingInline">

            <nav className="Links">

                <a href="/" className="Logo">Sigeun <span>v1.0</span></a>

                <div className="Btn">

                    {/* Botão de perfil */}
                    <button className="PerfilBotao" onClick={togglePerfil}>
                        <figure>
                            <img src={user_1} width={35} height={35} alt="Foto de perfil" />
                        </figure>
                        <div className="Icon">
                            <IoIosArrowDown />
                        </div>
                    </button>

                    {/* Botão de menu mobile */}
                    <button className="BtnMenuMobile" onClick={toggleMenuMobile}>
                        {mostrarMenuMobile ? <IoMdClose /> : <HiMenuAlt4 />}
                    </button>

                </div>

            </nav>

            {/* Menu de perfil */}
            {mostrarPerfil && (
                <div className="Perfil">
                    <div className="Info">
                        <figure>
                            <img src={user_1} width={35} height={35} alt="Foto de perfil" />
                        </figure>
                        <div className="Detalhes">
                            <p className="NomeDoUsuario">Hélio Carlitos António</p>
                            <p className="Usuario">08.0791.2027</p>
                        </div>
                    </div>
                    <div className="LinhaX"></div>
                    <nav>
                        <ul>
                            <li><a href="/DadosPessoais"><div className="Icon"><CiUser /></div><p>Dados pessoais</p></a></li>
                            <li><a href="/Mensagem"><div className="Icon"><CiMail /></div><p>Mensagem</p></a></li>
                            <li><a href="/Notificacoes"><div className="Icon"><CiBellOn /></div><p>Notificações</p></a></li>
                            <li><a href="/DocumentosUteis"><div className="Icon"><CiViewTimeline /></div><p>Documentos Úteis</p></a></li>
                            <li><a href="/Faq"><div className="Icon"><CiCircleQuestion /></div><p>FAQ</p></a></li>
                            <li><a href="/Configuracoes"><div className="Icon"><CiSettings /></div><p>Configurações</p></a></li>
                            <li><button onClick={() => setMostrarPopover(true)}>Sair</button></li>
                        </ul>
                    </nav>
                </div>
            )}

            {/* Popover de confirmação */}
            {mostrarPopover && (

                <div className="Popover PaddingInline">

                    <div className="Box">

                        <div className="Info">

                            <div className="Icon">
                                <CiWarning />
                            </div>

                            <p>Tem certeza que deseja sair?</p>

                        </div>

                        <div className="Btn">
                            <button onClick={confirmarSaida}>Sair</button>
                            <button onClick={() => setMostrarPopover(false)}>Cancelar</button>
                        </div>

                    </div>

                </div>
            )}

            {/* Menu Mobile */}
            <div className={`MenuMobile ${mostrarMenuMobile ? "ativo" : ""}`}>

                <div className="Titulo">
                    <p>Menu do Sistema</p>
                </div>

                <nav>

                    <ul>

                        <li>
                            <a href="/" className="TipoLink" onClick={toggleMenuMobile} aria-label="Ver página de Dashboard">
                                <div className="Icon"><CiGrid41 /></div>

                                <p> Dashboard </p>

                            </a>
                        </li>

                        <li>

                            <details>

                                <summary className="TipoLink">

                                    <div className="Icon"><CiAlignBottom /></div>

                                    <p>Portal do Estudante</p>

                                </summary>

                                <ul className="Lista">

                                    <li><a href="/NotasDeFrequencia" onClick={toggleMenuMobile} aria-label="Ver página de Notas de Frequência"> Notas de Frequência </a></li>

                                    <li><a href="/Exames" onClick={toggleMenuMobile} aria-label="Ver página de Exames"> Exames </a></li>

                                    <li><a href="/SituacaoFinanceira" onClick={toggleMenuMobile} aria-label="Ver página de Situação Financeira"> Situação Financeira </a></li>

                                    <li><a href="/AvalicaoDoCorpoDocente" onClick={toggleMenuMobile} aria-label="Ver página de Avaliação do Corpo Docente"> Avaliação do Corpo Docente </a></li>

                                    <li><a href="/Inscricoes" onClick={toggleMenuMobile} aria-label="Ver página de Inscrições"> Inscrições </a></li>

                                    <li><a href="/Horarios" onClick={toggleMenuMobile} aria-label="Ver página de Horários"> Horários </a></li>

                                    <li><a href="MaterialAcademico" onClick={toggleMenuMobile} aria-label="Ver página de Material Acadêmico"> Material Acadêmico </a></li>

                                    <li><a href="/PagamentoDeEmulamentos" onClick={toggleMenuMobile} aria-label="Ver página de Pagamento de Emolumentos"> Pagamento de Emolumentos </a></li>

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
