import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VerificarLogin() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const usuarioLogado = localStorage.getItem("usuarioLogado");

        if (!usuarioLogado && location.pathname !== "/Entrar") {
            navigate("/Entrar");
        }
    }, [navigate, location]);

    return null;
}

export default VerificarLogin;
