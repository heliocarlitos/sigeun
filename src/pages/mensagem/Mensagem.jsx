import { Helmet } from "react-helmet";
import "./Mensagem.css";
import TituloDaPagina from "../../components/titulodapagina/TituloDaPagina";
import user_1 from "../../assets/image/usuarios/user_1.webp";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import { TfiDropbox } from "react-icons/tfi";

function Mensagem() {
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

                            <div className="Opcoes">

                                <button className="Icon">
                                    <CiMenuKebab />
                                </button>

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

                        <div className="BtnNovaMsg">
                            <button>
                                +
                            </button>
                        </div>

                    </div>

                    <div className="Conversas">

                    </div>
                </div>

            </section>
        </>
    )
}
export default Mensagem;