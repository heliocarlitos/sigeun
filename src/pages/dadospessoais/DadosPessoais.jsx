import { Helmet } from "react-helmet";
import { useState } from "react";
import "./DadosPessoais.css";
import TituloDaPagina from "../../components/titulodapagina/TituloDaPagina";
import user_1 from "../../assets/image/usuarios/user_1.webp";

function DadosPessoais() {
    const [imagemPerfil, setImagemPerfil] = useState(user_1);

    // Manipular a seleção de imagem
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagemPerfil(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Resetar a imagem para a padrão
    const resetImage = () => {
        setImagemPerfil(user_1);
        document.getElementById("fileInput").value = ""; // Resetando o input
    };

    return (
        <>
            <Helmet>
                <title> Dados Pessoais | SEGEUN </title>
            </Helmet>

            <section className="DadosPessoais">

                <TituloDaPagina Titulo="Perfil do Usuário" />

                <div className="Dados">

                    <div className="Bloco">

                        <div className="Titulo">
                            <p> Alterar foto </p>
                        </div>

                        <div className="Texto">
                            <p> Você pode mudar sua foto aqui </p>
                        </div>

                        <div className="Caixa">

                            <figure>
                                <img src={imagemPerfil} alt="Foto de perfil" width={100} height={100} loading="lazy" />
                            </figure>

                            <div className="Btn">

                                <input className="InputFile" type="file" accept="image/png, image/jpeg, image/gif" name="fileInput" id="fileInput" onChange={handleImageChange} />

                                <label className="FileLabel" htmlFor="fileInput"> <p> Carregar </p> </label>

                                <button type="button" className="ResetButton" onClick={resetImage}>
                                    Apagar
                                </button>

                            </div>

                            <div className="Texto"> Formato JPG, PNG ou GIF. Máximo 30KB</div>
                        </div>

                    </div>

                    <div className="Bloco">

                        <div className="Titulo">
                            <p> Alterar Senha </p>
                        </div>

                        <div className="Texto">
                            <p> Você pode mudar sua senha aqui </p>
                        </div>

                        <div className="Caixa">

                            <div className="InputBox">
                                <label htmlFor="SenhaActual"> Senha atual </label>
                                <input type="password" name="SenhaActual" id="SenhaActual" required />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="NovaSenha"> Nova senha </label>
                                <input type="password" name="NovaSenha" id="NovaSenha" required />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="ConNovaSenha"> Confirmar nova senha </label>
                                <input type="password" name="ConNovaSenha" id="ConNovaSenha" required />
                            </div>

                        </div>

                    </div>

                </div>

                <div className="Dados c-dados">

                    <div className="c-bloco">

                        <div className="Titulo">
                            <p> Dados Pessoais </p>
                        </div>

                        <div className="Caixa">

                            <div className="InputBox">
                                <label htmlFor="NomeCompleto"> Nome Completo </label>
                                <input type="text" id="NomeCompleto" className="Desativado" disabled value="HÉLIO CARLITOS ANTÓNIO" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="DataNascimento"> Data de Nascimento </label>
                                <input type="date" id="DataNascimento" className="Desativado" disabled value="1999-10-15" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="Distrito"> Distrito </label>
                                <input type="text" id="Distrito" className="Desativado" disabled value="MOCUBA" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="Provincia"> Província </label>
                                <input type="text" id="Provincia" className="Desativado" disabled value="ZAMBÉZIA" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="Nacionalidade"> Nacionalidade </label>
                                <input type="text" id="Nacionalidade" className="Desativado" disabled value="MOÇAMBICANA" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="Sexo"> Sexo </label>
                                <input type="text" id="Sexo" className="Desativado" disabled value="MASCULINO" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="Contacto"> Contacto </label>
                                <input type="tel" className="Desativado" disabled id="Contacto" value="+258862867990" />
                            </div>

                        </div>

                    </div>

                    <div className="c-bloco">

                        <div className="Titulo">
                            <p> Dados Acadêmicos </p>
                        </div>

                        <div className="Caixa">

                            <div className="InputBox">
                                <label htmlFor="Extensao"> Extensão </label>
                                <input type="text" id="Extensao" className="Desativado" disabled value="CABO DELGADO" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="Centro"> Centro </label>
                                <input type="text" id="Centro" className="Desativado" disabled value="MONTEPUEZ" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="Regime"> Regime </label>
                                <input type="text" id="Regime" className="Desativado" disabled value="LABORAL" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="PlanoCurricula"> Plano Curricular </label>
                                <input type="text" id="PlanoCurricula" className="Desativado" disabled value="PLANO B" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="CursoManjor"> Curso Major </label>
                                <input type="text" id="CursoManjor" className="Desativado" disabled value="ENSINO DE PORTUGUÊS" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="CursoMinor"> Curso Minor </label>
                                <input type="text" id="CursoMinor" className="Desativado" disabled value="ENSINO DE INGLÊS" />
                            </div>

                            <div className="InputBox">
                                <label htmlFor="CodigoUsuario"> Código de usuário </label>
                                <input type="text" id="CodigoUsuario" className="Desativado" disabled value="08.0791.2017" />
                            </div>

                        </div>

                    </div>

                </div>

                <div className="BtnSalvar">
                    <button type="submit"> Salvar </button>
                    <button> Cancelar </button>
                </div>

            </section>
        </>
    );
}

export default DadosPessoais;
