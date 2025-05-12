import { useState } from "react"
import style from "../style/login.module.css"
import * as Icon from 'react-bootstrap-icons'
import { useNavigate } from "react-router-dom"

export default function Recuperar() {
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false)

    function toggleSenha() {
        setMostrarSenha(!mostrarSenha)
    }

    function toggleConfirmarSenha() {
        setMostrarConfirmarSenha(!mostrarConfirmarSenha)
    }

    const navigate = useNavigate()

    function cadastro() {
        navigate('/cadastro')
    }

    return (
        <>
            <div className={style.bodyLogin}>
                <div className={style.containerLogin}>
                    <div className={style.cardLogin}>
                        <h1 className={style.tituloLogin}>Recuperar senha</h1>

                        <form>
                            <label className={style.labelLogin} htmlFor="email">E-mail</label>
                            <input className={style.inputLogin} id="email" type="text" required />

                            <label className={style.labelLogin} htmlFor="senha">Senha</label>

                            <div className={style.inputSenha}>
                                <input className={style.inputLogin} type={mostrarSenha ? 'text' : 'password'} required />

                                <section onClick={toggleSenha} className={style.olhos}>
                                    {mostrarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                                </section>
                            </div>

                            <label className={style.labelLogin} htmlFor="confirmarSenha">Confirmar Senha</label>

                            <div className={style.inputSenha}>
                                <input className={style.inputLogin} type={mostrarConfirmarSenha ? 'text' : 'password'} required />

                                <section onClick={toggleConfirmarSenha} className={style.olhos}>
                                    {mostrarConfirmarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                                </section>
                            </div>

                            <section className={style.buttonLogin}>
                                <button type="submit">Recuperar</button>
                            </section>

                            <section style={{ display: 'flex', justifyContent: "center", gap: "10px" }}>
                                <p onClick={cadastro} style={{ color: "#fff" }}> Não tem uma conta? </p>
                                <p className={style.cadastre} onClick={cadastro} >Cadastre-se</p>
                            </section>
                        </form>
                    </div>
                </div >
            </div>
        </>
    )
}