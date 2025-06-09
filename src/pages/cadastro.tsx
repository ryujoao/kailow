import { useNavigate } from "react-router-dom"
import style from "../style/login.module.css"
import { useState } from "react"
import * as Icon from 'react-bootstrap-icons'
import { useForm } from "react-hook-form";
import Loading from "../components/loader";


type cadastroType = {
    nome: string,
    email: string,
    telefone: string,
    nascimento: string,
    senha: string
}

export default function Cadastro() {

    const { register, handleSubmit, formState: { errors } } = useForm<cadastroType>()
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [mensagem, setMensagem] = useState("")
    const navigate = useNavigate()

    function validarSenha(senha: string) {
        return senha.length >= 8 || "A senha deve ter pelo menos 8 caracteres";
    }


    async function handleCadastro(data: cadastroType) {

        console.log(data)

        try {

            const response = await fetch("http://localhost:3000/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const res = await response.json(); // <-- Pegua o token aqui
                localStorage.setItem("token", res.token); // <-- Salva o token
                console.log("Token recebido:", res.token);

                setIsLoggingIn(true)
                setTimeout(() => {
                    setIsLoggingIn(false);
                    navigate("/home");
                }, 3000);

                console.log("Cadastro realizado com sucesso!");
            } else {

                const res = await response.json()
                console.error("Erro ao realizar cadastro:", response.statusText);
                setMensagem(res.error)
            }
        } catch (error: any) {
            console.error("Erro na requisição:", error);
            setMensagem(error.message)
        }
    }

    function toggleSenha() {
        setMostrarSenha(!mostrarSenha)
    }

    if (isLoggingIn) {
        // Exibe o loader após o login
        return <Loading />;
    }


    function login() {
        navigate('/')
    }



    return (
        <>

            <div className={style.bodyCadastro}>
                <div className={style.containerLogin}>
                    <div className={style.fraseLoginDiv}>
                        <h2 className={style.fraseLogin}>Encontre oportunidades desde cedo na sua região!</h2>
                    </div>
                    <div className={style.cardLogin}>
                        <h1 className={style.tituloLogin}>Cadastre-se</h1>

                        <form onSubmit={handleSubmit(handleCadastro)}>
                            <label htmlFor="nome" className={style.labelLogin}>Nome</label>
                            <input className={style.inputLogin} id="nome" type="text" required {...register("nome")} />

                            <label htmlFor="email" className={style.labelLogin}>E-mail</label>
                            <input className={style.inputLogin} id="email" type="email" required {...register("email")} />

                            <label htmlFor="telefone" className={style.labelLogin}>Telefone</label>
                            <input className={style.inputLogin} id="telefone" type="tel" pattern="[0-9]{11}" required {...register("telefone")} />

                            <label htmlFor="data" className={style.labelLogin}>Data de Nascimento</label>
                            <input className={style.inputLogin} id="data" type="date" required {...register("nascimento")} />

                            <label htmlFor="senha" className={style.labelLogin}>Senha</label>

                            <div className={style.inputSenha}>
                                <input className={style.inputLogin} id="senha" type={mostrarSenha ? 'text' : 'password'} autoComplete="off" required {...register("senha", { validate: validarSenha })} />

                                <section onClick={toggleSenha} className={style.olhos}>
                                    {mostrarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                                </section>
                            </div>
                            {errors.senha && <div className={style.senhaMsg}>{errors.senha.message}</div>}

                            <div className={style.senhaMsg}></div>
                            <div className={style.mensagem}>{mensagem}</div>

                            <a href="/recuperar" className={style.forgotPassword}>Esqueceu a senha?</a>

                            <section className={style.buttonLogin}>
                                <button type="submit" >Cadastrar</button>
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