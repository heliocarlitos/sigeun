import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { CiSearch, CiMenuKebab, CiEdit, CiSettings, CiCircleQuestion, CiLogout } from "react-icons/ci";
import { TfiDropbox } from "react-icons/tfi";
import { useState, useRef, useEffect } from "react";
import "./Mensagem.css";
import TituloDaPagina from "../../components/titulodapagina/TituloDaPagina";
import user_1 from "../../assets/image/usuarios/user_1.webp";
import user_2 from "../../assets/image/usuarios/user_2.webp";
import user_3 from "../../assets/image/usuarios/user_3.webp";
import user_4 from "../../assets/image/usuarios/user_4.webp";
import user_5 from "../../assets/image/usuarios/user_5.webp";
import user_6 from "../../assets/image/usuarios/user_6.webp";
import user_7 from "../../assets/image/usuarios/user_7.webp";
import user_8 from "../../assets/image/usuarios/user_8.webp";
import user_9 from "../../assets/image/usuarios/user_9.webp";
import user_10 from "../../assets/image/usuarios/user_10.webp";

function Mensagem() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpcoesAberto, setMenuOpcoesAberto] = useState(false);
    const menuRef = useRef(null);
    const opcoesRef = useRef(null);

    // Alternar visibilidade da lista de mensagens
    const toggleList = () => setIsOpen(!isOpen);

    // Alternar visibilidade do menu de opções
    const toggleOpcoes = () => setMenuOpcoesAberto(!menuOpcoesAberto);

    // Fecha os menus ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (opcoesRef.current && !opcoesRef.current.contains(event.target)) {
                setMenuOpcoesAberto(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <Helmet>
                <title> Mensagem | SIGEUN </title>
            </Helmet>

            <section className="Mensagem CardDefault">

                <div className="Campo">

                    <div className="Bloco">

                        <TituloDaPagina Titulo="Mensagens" />

                        <div className="Usuario">

                            <div className="FotDetalhes">
                                <figure>
                                    <img src={user_1} loading="lazy" alt="Foto de perfil" width={50} height={50} />
                                </figure>

                                <div className="Detalhes">
                                    <p className="Nome"> Hélio Carlitos </p>
                                    <p className="Cod-Usuario"> 08.0791.2017 </p>
                                    <p className="StatusOn"> Online </p>
                                </div>

                            </div>

                            {/* Menu de Opções */}
                            <div className="Opcoes" ref={opcoesRef}>

                                <button className="Icon" onClick={toggleOpcoes}>
                                    <CiMenuKebab />
                                </button>

                                {menuOpcoesAberto && (
                                    <div className="MenuOpcoes">

                                        <Link to="/DadosPessoais">
                                            <div className="Icon">
                                                <CiEdit />
                                            </div>
                                            <p> Ver Perfil </p>
                                        </Link>

                                        <Link to="#">
                                            <div className="Icon">
                                                <CiSettings />
                                            </div>
                                            <p> Configurações </p>
                                        </Link>

                                        <Link to="#">
                                            <div className="Icon">
                                                <CiCircleQuestion />
                                            </div>
                                            <p> Ajuda </p>
                                        </Link>

                                        <Link to="#">
                                            <div className="Icon">
                                                <CiLogout />
                                            </div>
                                            <p> Sair </p>
                                        </Link>

                                    </div>
                                )}

                            </div>
                        </div>

                        <div className="Pesquisa">
                            <div className="Icon">
                                <CiSearch />
                            </div>
                            <input type="text" placeholder="Pesquisar" />
                        </div>

                        <div className="Men-Recentes">
                            <p> Mensagens recentes </p>
                        </div>

                        <div className="AsMensagens">
                            <p className="Caixa-vazia">
                                Caixa vazia
                                <div className="Icon">
                                    <TfiDropbox />
                                </div>
                            </p>
                        </div>

                        {/* Botão + e Lista de Opções */}
                        <div className="BtnNovaMsg" ref={menuRef}>
                            <button onClick={toggleList}>+</button>

                            {isOpen && (
                                <div className="ListaNovaMsg">

                                    <div className="Pesquisa">
                                        <div className="Icon">
                                            <CiSearch />
                                        </div>
                                        <input type="text" placeholder="Pesquisar" />
                                    </div>

                                    <nav>
                                        <Link to="#">
                                            <figure className="On TemStatus">
                                                <img src={user_2} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> Carla Luís </p>
                                                <p className="Codigo"> 08.0935.2017 </p>
                                            </div>
                                        </Link>

                                        <Link to="#">
                                            <figure className="TemStatus">
                                                <img src={user_3} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> Éric Piter </p>
                                                <p className="Codigo"> 08.7004.2017 </p>
                                            </div>
                                        </Link>

                                        <Link to="#">
                                            <figure className="TemStatus">
                                                <img src={user_4} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> Sónia Veloso </p>
                                                <p className="Codigo"> 08.1202.2017 </p>
                                            </div>
                                        </Link>

                                        <Link to="#">
                                            <figure className="On">
                                                <img src={user_5} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> Carlos Lopes </p>
                                                <p className="Codigo"> 08.1115.2017 </p>
                                            </div>
                                        </Link>

                                        <Link to="#">
                                            <figure>
                                                <img src={user_6} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> José Ramos </p>
                                                <p className="Codigo"> 08.0640.2017 </p>
                                            </div>
                                        </Link>

                                        <Link to="#">
                                            <figure>
                                                <img src={user_7} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> Hélder Pei </p>
                                                <p className="Codigo"> 08.5356.2017 </p>
                                            </div>
                                        </Link>

                                        <Link to="#">
                                            <figure>
                                                <img src={user_8} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> Delfino Fujaro </p>
                                                <p className="Codigo"> 08.9806.2017 </p>
                                            </div>
                                        </Link>

                                        <Link to="#">
                                            <figure>
                                                <img src={user_9} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> Kelven António </p>
                                                <p className="Codigo"> 08.1213.2017 </p>
                                            </div>
                                        </Link>

                                        <Link to="#">
                                            <figure className="On TemStatus">
                                                <img src={user_10} alt="Foto de perfil" width={40} height={40} loading="lazy" />
                                            </figure>
                                            <div className="Info">
                                                <p className="Nome"> Teresa Yuran </p>
                                                <p className="Codigo"> 08.1213.2017 </p>
                                            </div>
                                        </Link>
                                    </nav>

                                </div>
                            )}
                        </div>

                    </div>

                    <div className="Conversas"></div>

                </div>
            </section>
        </>
    );
}

export default Mensagem;
