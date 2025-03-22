import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CiUser, CiLock } from "react-icons/ci";
import "./Entrar.css";
import logo from "../../../public/logo.webp";

const usuarios = [
    { usuario: "123.456.789.012", senha: "Senha@2025" },
    { usuario: "987.654.321.098", senha: "Exemplo#2025" },
    { usuario: "321.654.987.765", senha: "Teste!2025" }
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
            navigate("/DashBoard");
        }
    }, [navigate]);

    const validarUsuario = (valor) => {
        const regex = /^\d{3}\.\d{3}\.\d{3}\.\d{3}$/;
        return regex.test(valor);
    };

    const validarSenha = (valor) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?àáãâéêíõôúü])(?=.*\d).{6,}$/;
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
            setTimeout(() => navigate("/DashBoard"), 2000);
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
                <div className="Formulario">
                    <div className="Titulo">
                        <p> Sistema de Gestão Universitário </p>
                    </div>

                    <figure>
                        <img src={logo} alt="Logo da Universidade" width={300} height={300} loading="lazy" />
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
