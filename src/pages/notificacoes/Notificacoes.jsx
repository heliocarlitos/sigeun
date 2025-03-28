
import { Helmet } from "react-helmet";
import "./Notificacoes.css";
import TituloDaPagina from "../../components/titulodapagina/TituloDaPagina";
import { Link } from "react-router-dom"
import { CiMenuKebab } from "react-icons/ci";

function Notificacoes() {
    return (
        <>
            <Helmet>
                <title> Notificações | SIGEUN </title>
            </Helmet>

            <section className="Notificacoes CardDefault">
                <TituloDaPagina Titulo="Notificações (6)" />

                <div className="AsNotificacaoes">

                    <div className="CardDeNotificacoes">

                        <Link to="#" className="Detalhes">
                            <figure> <img src="/logo_png.webp" alt="Image" width={50} height={50} loading="lazy" /> </figure>
                            <div>
                                <p className="Titulo"> Perfil actualizado </p>
                                <p className="Texto"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </Link>

                        <div className="Accao">
                            <p className="Tempo"> agora </p>
                            <button className="Opcoes"> <CiMenuKebab />
                            </button>
                        </div>

                    </div>

                    <div className="CardDeNotificacoes">

                        <Link to="#" className="Detalhes">
                            <figure> <img src="/logo_png.webp" alt="Image" width={50} height={50} loading="lazy" /> </figure>
                            <div>
                                <p className="Titulo"> Último login </p>
                                <p className="Texto"> Último login foi feito em 28/03/2025 11:13:24. </p>
                            </div>
                        </Link>

                        <div className="Accao">
                            <p className="Tempo">12min</p>
                            <button className="Opcoes"> <CiMenuKebab />
                            </button>
                        </div>

                    </div>

                    <div className="CardDeNotificacoes">

                        <Link to="#" className="Detalhes">
                            <figure> <img src="/logo_png.webp" alt="Image" width={50} height={50} loading="lazy" /> </figure>
                            <div>
                                <p className="Titulo"> Políticas de Privacidade </p>
                                <p className="Texto"> Ao fazer o uso do SIGEUP, significa que você concorda... </p>
                            </div>
                        </Link>

                        <div className="Accao">
                            <p className="Tempo"> 1 d </p>
                            <button className="Opcoes"> <CiMenuKebab />
                            </button>
                        </div>

                    </div>

                    <div className="CardDeNotificacoes">

                        <Link to="#" className="Detalhes">
                            <figure> <img src="/logo_png.webp" alt="Image" width={50} height={50} loading="lazy" /> </figure>
                            <div>
                                <p className="Titulo"> Disponível no Telegram </p>
                                <p className="Texto"> Já é possível usar a sua conta TELEGRAM para consultar as... </p>
                            </div>
                        </Link>

                        <div className="Accao">
                            <p className="Tempo"> 2 d </p>
                            <button className="Opcoes"> <CiMenuKebab />
                            </button>
                        </div>

                    </div>

                    <div className="CardDeNotificacoes">

                        <Link to="#" className="Detalhes">
                            <figure> <img src="/logo_png.webp" alt="Image" width={50} height={50} loading="lazy" /> </figure>
                            <div>
                                <p className="Titulo"> Aplicativo SIGEUN </p>
                                <p className="Texto">Caro estudante, já está disponível a versão android do sistema SIGEUN. </p>
                            </div>
                        </Link>

                        <div className="Accao">
                            <p className="Tempo"> 2 d </p>
                            <button className="Opcoes"> <CiMenuKebab />
                            </button>
                        </div>

                    </div>

                    <div className="CardDeNotificacoes">

                        <Link to="#" className="Detalhes">
                            <figure> <img src="/logo_png.webp" alt="Image" width={50} height={50} loading="lazy" /> </figure>
                            <div>
                                <p className="Titulo"> Seja bem-vindo </p>
                                <p className="Texto"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </Link>

                        <div className="Accao">
                            <p className="Tempo"> 22/03</p>
                            <button className="Opcoes"> <CiMenuKebab />
                            </button>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Notificacoes;