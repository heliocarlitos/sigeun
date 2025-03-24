import "./TituloDaPagina.css";

function TituloDaPagina({ Titulo }) {
    return (
        <>
            <div className="TituloDaPagina">
                <p> {Titulo} </p>
            </div>
        </>
    )
}
TituloDaPagina.defaultProps = {
    Titulo: "Título da Página"
}
export default TituloDaPagina;