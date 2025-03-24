import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CiUser, CiLock } from "react-icons/ci";
import "./Entrar.css";
import logo_png from "../../../public/logo_png.webp";
import BackgroundSlideshow from "../../components/backgroundslideshow/BackgroundSlideshow";

const usuarios = [
    { usuario: "08.0791.2017", senha: "SenhaTestes@1" }
];

function Entrar() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioLogado = localStorage.getItem("usuarioLogado");
        if (usuarioLogado) {
            navigate("/");
        }
    }, [navigate]);

    const validarUsuario = (valor) => {
        const regex = /^\d{2}\.\d{4}\.\d{4}$/;
        return regex.test(valor);
    };

    const validarSenha = (valor) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?àçáãâéêíõôúü])(?=.*\d).{6,}$/;
        return regex.test(valor);
    };

    const autenticar = (e) => {
        e.preventDefault();
        setErro(false);
        setSucesso(false);

        if (!validarUsuario(usuario) || !validarSenha(senha)) {
            setErro(true);
            return;
        }

        const encontrado = usuarios.find(user => user.usuario === usuario && user.senha === senha);

        if (encontrado) {
            setSucesso(true);
            localStorage.setItem("usuarioLogado", JSON.stringify(encontrado));
            setTimeout(() => navigate("/"), 2000);
        } else {
            setErro(true);
        }
    };

    return (
        <>
            <Helmet>
                <title> Entrar | Sigeun </title>
            </Helmet>


            <section className="Entrar">

            <BackgroundSlideshow />


                <div className="Formulario">
                    <div className="Titulo">
                        <p> Sistema de Gestão Universitário </p>
                    </div>

                    <figure>
                        <img src={logo_png} alt="Logo da Universidade" width={300} height={300} loading="lazy" />
                    </figure>

                    <form onSubmit={autenticar}>
                        <div className="Notificacoes">
                            {erro && <p className="Erro"> Usuário ou Senha inválida </p>}
                            {sucesso && <p className="Sucesso"> Logado com sucesso</p>}
                        </div>

                        <div className="InputBox">
                            <div className="Icon">
                                <CiUser />
                            </div>
                            <input
                                type="text"
                                name="Usuario"
                                id="Usuario"
                                placeholder="Código de usuário"
                                maxLength={15}
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />
                        </div>

                        <div className="InputBox">
                            <div className="Icon">
                                <CiLock />
                            </div>
                            <input
                                type="password"
                                name="Senha"
                                id="Senha"
                                placeholder="Digite a sua Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <div className="InputButton">
                            <button type="submit" aria-label="Clica para entrar"> Autenticar </button>

                            <div className="Outros">
                                <ul>
                                    <li> <Link to="#"> Recém-admitidos </Link> </li>
                                    <li> <Link to="#"> Esqueci a senha </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </form>

                    <Link to="#" title="Sistema de Gestão Universitário" className="CopyRi">
                        <p>© {new Date().getFullYear()} | Sistema Universitário </p>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Entrar;
