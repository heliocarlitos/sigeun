import { Link } from "react-router-dom";
import "./CardDisciplina.css";

function CardDisciplina({ LinkDis, Icon, Titulo, Ano }) {
    return (
        <>

            <Link to={LinkDis} className="CardDisciplina">

                <div className="Icon">
                    {Icon}
                </div>

                <div className="Titulo">
                    <p>{Titulo}</p>
                </div>

                <div className="Texto">
                    {Ano}
                </div>

            </Link>

        </>
    )
}
export default CardDisciplina;