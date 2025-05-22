import { useNavigate } from "react-router-dom"
import style from "../style/login.module.css"
import { useState } from "react"
import * as Icon from 'react-bootstrap-icons'

export default function Cadastro() {

    const [mostrarSenha, setMostrarSenha] = useState(false)

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        data: "",
        senha: "",
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    async function handleCadastro(event: React.FormEvent) {
        event.preventDefault();

        // Formatar a data de nascimento para incluir "T00:00:00.000Z"
        const formattedData = {
            ...formData,
            data: `${formData.data}T00:00:00.000Z`,
        };

        try {
            const response = await fetch("http://localhost:5173/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formattedData),
            });

            if (response.ok) {
                console.log("Cadastro realizado com sucesso!");
                navigate("/home"); // Navega para a página home após o cadastro
            } else {
                console.error("Erro ao realizar cadastro:", response.statusText);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    function toggleSenha() {
        setMostrarSenha(!mostrarSenha)
    }

    const navigate = useNavigate()

    function handleLogin() {
        navigate('/home')
    }
    function login() {
        navigate('/')
    }

    return (
        <>

            <div className={style.bodyLogin}>
                <div className={style.containerLogin}>
                    <div className={style.fraseLoginDiv}>
                        <h2 className={style.fraseLogin}>Encontre oportunidades desde cedo na sua região!</h2>
                    </div>
                    <div className={style.cardLogin}>
                        <h1 className={style.tituloLogin}>Cadastre-se</h1>

                        <form onSubmit={handleCadastro}>
                            <label htmlFor="nome" className={style.labelLogin}>Nome</label>
                            <input className={style.inputLogin} id="nome" type="text" required onChange={handleInputChange} />

                            <label htmlFor="email" className={style.labelLogin}>E-mail</label>
                            <input className={style.inputLogin} id="email" type="text" required onChange={handleInputChange} />

                            <label htmlFor="telefone" className={style.labelLogin}>Telefone</label>
                            <input className={style.inputLogin} id="telefone" type="text" required onChange={handleInputChange} />

                            <label htmlFor="data" className={style.labelLogin}>Data de Nascimento</label>
                            <input className={style.inputLogin} id="data" type="date" required onChange={handleInputChange} />

                            <label htmlFor="senha" className={style.labelLogin}>Senha</label>

                            <div className={style.inputSenha}>
                                <input className={style.inputLogin} id="senha" type={mostrarSenha ? 'text' : 'password'} required onChange={handleInputChange} />

                                <section onClick={toggleSenha} className={style.olhos}>
                                    {mostrarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                                </section>
                            </div>

                            <a href="/recuperar" className={style.forgotPassword}>Esqueceu a senha?</a>

                            <section className={style.buttonLogin}>
                                <button type="submit" onClick={handleLogin} >Cadastrar</button>
                            </section>

                            <section style={{ display: 'flex', justifyContent: "center", gap: "10px" }}>
                                <p style={{ color: "#fff" }}> Já tem uma conta? </p>
                                <p className={style.fazerLogin} onClick={login} >Faça login</p>
                            </section>

                        </form>
                    </div>

                </div >
            </div>
        </>
    )
}