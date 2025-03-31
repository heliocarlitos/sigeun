
import { Helmet } from "react-helmet";
import { CiImport } from "react-icons/ci";
import "./DocumentosUteis.css";
import TituloDaPagina from "../../components/titulodapagina/TituloDaPagina";

function DocumentosUteis() {
    return (
        <>
            <Helmet>
                <title> Documentos Úteis | SIGEUN </title>
            </Helmet>

            <section className="DocumentosUteis CardDefault">

                <TituloDaPagina Titulo="Documentos úteis" />

                <div className="OsDoc">

                    <div className="Doc">

                        <div className="Texto">
                            <p> Edital de Matrículas e Propinas 2020 </p>
                        </div>

                        <div className="Accao">

                            <div className="Tamanho">
                                <p> 205.21 KB </p>
                            </div>

                            <a href="#">

                                <div className="Icon">
                                    <CiImport />
                                </div>

                                <p> Baixar </p>
                            </a>

                        </div>

                    </div>

                    <div className="Doc">

                        <div className="Texto">
                            <p> Calendário Académico 2020 </p>
                        </div>

                        <div className="Accao">

                            <div className="Tamanho">
                                <p> 1.78 MB </p>
                            </div>

                            <a href="#">

                                <div className="Icon">
                                    <CiImport />
                                </div>

                                <p> Baixar </p>
                            </a>

                        </div>

                    </div>

                    <div className="Doc">

                        <div className="Texto">
                            <p> Regulamento Académico </p>
                        </div>

                        <div className="Accao">

                            <div className="Tamanho">
                                <p> 18.35 MB </p>
                            </div>

                            <a href="#">

                                <div className="Icon">
                                    <CiImport />
                                </div>

                                <p> Baixar </p>
                            </a>

                        </div>

                    </div>

                    <div className="Doc">

                        <div className="Texto">
                            <p> Manual de Instruções para pagamento de Emolumentos </p>
                        </div>

                        <div className="Accao">

                            <div className="Tamanho">
                                <p> 510.27 KB </p>
                            </div>

                            <a href="#">

                                <div className="Icon">
                                    <CiImport />
                                </div>

                                <p> Baixar </p>
                            </a>

                        </div>

                    </div>

                    <div className="Doc">

                        <div className="Texto">
                            <p> Normas para Produção e Publicação de Trabalhos Científicos </p>
                        </div>

                        <div className="Accao">

                            <div className="Tamanho">
                                <p> 242.11 KB </p>
                            </div>

                            <a href="#">

                                <div className="Icon">
                                    <CiImport />
                                </div>

                                <p> Baixar </p>
                            </a>

                        </div>

                    </div>

                    <div className="Doc">

                        <div className="Texto">
                            <p> Manual de Instruções para Inscrição Semestral </p>
                        </div>

                        <div className="Accao">

                            <div className="Tamanho">
                                <p> 1.35 MB </p>
                            </div>

                            <a href="#">

                                <div className="Icon">
                                    <CiImport />
                                </div>

                                <p> Baixar </p>
                            </a>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default DocumentosUteis;