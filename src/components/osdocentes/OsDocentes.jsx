
import TituloDaPagina from "../../components/titulodapagina/TituloDaPagina";
import "./OsDocentes.css";
import ODocente from "../../components/odocente/ODocente";
import docente_1 from "../../assets/image/docente/docente_1.webp";
import docente_2 from "../../assets/image/docente/docente_2.webp";
import docente_3 from "../../assets/image/docente/docente_3.webp";
import docente_4 from "../../assets/image/docente/docente_4.webp";
import docente_5 from "../../assets/image/docente/docente_5.webp";
import docente_6 from "../../assets/image/docente/docente_6.webp";

function OsDocentes() {
    return (
        <>
            <div className="OsDocentes PaddingInline">

                <div className="CardDefault">

                    <TituloDaPagina Titulo="Docentes" />

                    <div className="Container">

                        <ODocente
                            Foto={docente_1}
                            Nome="MA. Pedro Fancisco"
                            Disciplina="Psicologia Geral"
                        />

                        <ODocente
                            Foto={docente_2}
                            Nome="MA. Rebeca Doloes Silva"
                            Disciplina="Língua Portuguesa I"
                        />

                        <ODocente
                            Foto={docente_3}
                            Nome="MA. Dinis Fancisco"
                            Disciplina="MEIC"
                        />

                        <ODocente
                            Foto={docente_4}
                            Nome="MA. Cleide Sabonete"
                            Disciplina="Linguística Geral I"
                        />

                        <ODocente
                            Foto={docente_5}
                            Nome="PhD. Jeverson Dias"
                            Disciplina="Estudos Literários I"
                        />

                        <ODocente
                            Foto={docente_6}
                            Nome="PhD. Célio da Teresa"
                            Disciplina="Fundamentos de Pedagogia"
                        />

                    </div>

                </div>

            </div>
        </>
    )
}
export default OsDocentes;