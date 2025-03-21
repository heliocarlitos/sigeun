import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiUser, CiMail, CiBellOn, CiViewTimeline, CiCircleQuestion, CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import "./Header.css";
import user_1 from "../../../assets/image/usuarios/user_1.webp";

function Header() {
    const [mostrarPerfil, setMostrarPerfil] = useState(false);

    const togglePerfil = () => {
        setMostrarPerfil((prev) => !prev);
    };

    useEffect(() => {
        function fecharAoClicarFora(event) {
            if (mostrarPerfil && !event.target.closest(".Perfil") && !event.target.closest(".PerfilBotao")) {
                setMostrarPerfil(false);
            }
        }
        document.addEventListener("click", fecharAoClicarFora);
        return () => {
            document.removeEventListener("click", fecharAoClicarFora);
        };
    }, [mostrarPerfil]);

    return (
        <>
            <section className="Header PaddingInline">

                <nav className="Links">
                    <Link to="/" className="Logo"> Sigeun <span>v1.0</span> </Link>
                    <button className="PerfilBotao" onClick={togglePerfil}>
                        <figure>
                            <img
                                src={user_1}
                                width={35}
                                height={35}
                                alt="Foto de perfil"
                            />
                        </figure>

                        <div className="Icon">
                            <IoIosArrowDown />
                        </div>

                    </button>
                </nav>

                {mostrarPerfil && (
                    <div className="Perfil">
                        <div className="Info">
                            <figure>
                                <img
                                    src={user_1}
                                    width={35}
                                    height={35}
                                    alt="Foto de perfil"
                                />
                            </figure>

                            <div className="Detalhes">
                                <p className="NomeDoUsuario">Hélio Carlitos António</p>
                                <p className="Usuario">08.0791.2027</p>
                            </div>
                        </div>

                        <div className="LinhaX"></div>

                        <nav>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <div className="Icon"><CiUser /></div>
                                        <p>Dados pessoais</p>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <div className="Icon"><CiMail /></div>
                                        <p>Mensagem</p>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <div className="Icon"><CiBellOn /></div>
                                        <p>Notificações</p>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <div className="Icon"><CiViewTimeline /></div>
                                        <p>Documentos Úteis</p>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <div className="Icon"><CiCircleQuestion /></div>
                                        <p>FAQ</p>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <div className="Icon"><CiSettings />
                                        </div>
                                        <p>Configurações</p>
                                    </Link>
                                </li>

                                <li>
                                    <Link className="Sair" to="#">
                                        Sair
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </section>
        </>
    );
}

export default Header;
