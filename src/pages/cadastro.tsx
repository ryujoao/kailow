import { useNavigate } from "react-router-dom"
import style from "../style/login.module.css"
import { useState } from "react"
import * as Icon from 'react-bootstrap-icons'

export default function Cadastro() {

    const [mostrarSenha, setMostrarSenha] = useState(false)

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
                    <div className={style.cardLogin}>
                        <h1 className={style.tituloLogin}>Cadastre-se</h1>

                        <form>
                            <label htmlFor="nome" className={style.labelLogin}>Nome</label>
                            <input className={style.inputLogin} id="nome" type="text" required />

                            <label htmlFor="email" className={style.labelLogin}>E-mail</label>
                            <input className={style.inputLogin} id="email" type="text" required />

                            <label htmlFor="telefone" className={style.labelLogin}>Telefone</label>
                            <input className={style.inputLogin} id="telefone" type="text" required />

                            <label htmlFor="data" className={style.labelLogin}>Data de Nascimento</label>
                            <input className={style.inputLogin} id="data" type="date" required />

                            <label htmlFor="senha" className={style.labelLogin}>Senha</label>

                            <div className={style.inputSenha}>
                                <input className={style.inputLogin} id="senha" type={mostrarSenha ? 'text' : 'password'} required />

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

                    <div className={style.fraseLoginDiv}>
                        <h2 className={style.fraseLogin}>Encontre oportunidades desde cedo na sua região!</h2>
                    </div>
                </div >
            </div>
        </>
    )
}