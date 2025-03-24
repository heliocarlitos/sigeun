
import "./ODocente.css";

function ODocente({ Foto, Nome, Disciplina }) {
    return (
        <>
            <div className="ODocente">
                
                <figure> <img src={Foto} alt="Foto do docente" width={564} height={606} loading="lazy" /> </figure>

                <div className="Sobre">
                    <p className="Nome"> {Nome} </p>
                    <p className="Disciplina"> {Disciplina} </p>
                </div>
                
            </div>
        </>
    )
}
export default ODocente;