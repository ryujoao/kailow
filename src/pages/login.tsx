import { useNavigate } from 'react-router-dom'
import style from '../style/login.module.css'
import * as Icon from 'react-bootstrap-icons'
import { useState } from 'react'

export default function Login() {

  const [mostrarSenha, setMostrarSenha] = useState(false)

  function toggleSenha() {
    setMostrarSenha(!mostrarSenha)
  }

  const navigate = useNavigate()

  function handleLogin() {
    navigate('/home')
  }

  function cadastro() {
    navigate('/cadastro')
  }

  return (
    <>
      <div className={style.bodyLogin}>
        <div className={style.containerLogin}>
          <div className={style.cardLogin}>
            <h1 className={style.tituloLogin}>Bem vindo(a)!</h1>

            <form>
              <label className={style.labelLogin} htmlFor='email'>E-mail ou Telefone</label>
              <input className={style.inputLogin} id='email' type="text" required />

              <label className={style.labelLogin} htmlFor="senha">Senha</label>

              <div className={style.inputSenha}>
                <input className={style.inputLogin} id='senha' type={mostrarSenha ? 'text' : 'password'} required />

                <section onClick={toggleSenha} className={style.olhos}>
                  {mostrarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                </section>
              </div>

              <a href="/recuperar" className={style.forgotPassword}>Esqueceu a senha?</a>

              <section className={style.buttonLogin}>
                <button type="submit" onClick={handleLogin} >Entrar</button>
              </section>

              <section style={{ display: 'flex', justifyContent: "center", gap: "10px" }}>
                <p style={{ color: "#fff" }}> Não tem uma conta? </p>
                <p className={style.cadastre} onClick={cadastro} >Cadastre-se</p>
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
