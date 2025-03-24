import CardDisciplina from "../../components/carddisciplina/CardDisciplina";
import { CiBag1, CiVial, CiViewTimeline, CiPalette, CiBoxes, CiGrid41, CiHotdog } from "react-icons/ci";
import "./AsDisciplinas.css";
import TituloDaPagina from "../../components/titulodapagina/TituloDaPagina";
function AsDisciplinas() {
    return (
        <>
            <section className="AsDisciplinas PaddingInline">

                <div className="CardDefault">

                    <TituloDaPagina Titulo="Disciplinas" />

                    <div className="Container ">

                        <CardDisciplina
                            LinkDis="#"
                            Icon={<CiBag1 />}
                            Titulo="Psicologia Geral"
                            Ano="1° ano"
                        />

                        <CardDisciplina
                            LinkDis="#"
                            Icon={<CiVial />}
                            Titulo="Métodos de Estudo e Investigação Científica"
                            Ano="1° ano"
                        />

                        <CardDisciplina
                            LinkDis="#"
                            Icon={<CiBoxes />}
                            Titulo="Linguística Geral I"
                            Ano="1° ano"
                        />

                        <CardDisciplina
                            LinkDis="#"
                            Icon={<CiGrid41 />}
                            Titulo="Língua Portuguesa I"
                            Ano="1° ano"
                        />

                        <CardDisciplina
                            LinkDis="#"
                            Icon={<CiViewTimeline />}
                            Titulo="Fundamentos de Pedagogia"
                            Ano="1° ano"
                        />

                        <CardDisciplina
                            LinkDis="#"
                            Icon={<CiPalette />}
                            Titulo="Estudos Literários I"
                            Ano="1° ano"
                        />

                        {/* <CardDisciplina
                            LinkDis="#"
                            Icon={<CiHotdog />}
                            Titulo="Tema Transversal I"
                            Ano="1° ano"
                        /> */}

                    </div>

                </div>

            </section>
        </>
    )
}
export default AsDisciplinas;