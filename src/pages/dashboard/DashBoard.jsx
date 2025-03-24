import { Helmet } from "react-helmet";
import AsDisciplinas from "../../components/asdisciplinas/AsDisciplinas";
import OsDocentes from "../../components/osdocentes/OsDocentes";
import "./DashBoard.css";

function DashBoard() {
    return (
        <>
            <Helmet>
                <title> DashBoard | SIGEUN </title>
            </Helmet>

            <section className="DashBoard">
                <AsDisciplinas />
                <OsDocentes />
            </section>
        </>
    )
}
export default DashBoard;