import { useNavigate } from 'react-router-dom';
import style from '../style/login.module.css';
import * as Icon from 'react-bootstrap-icons';
import { useState } from 'react';
import Loading from '../components/loader';

export default function Login() {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Controla o carregamento após o login
  const [mostrarSenha, setMostrarSenha] = useState(false);
  
  function toggleSenha() {
    setMostrarSenha(!mostrarSenha);
  }
  
  function handleLogin(event: React.FormEvent) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    setIsLoggingIn(true); // Ativa o estado de carregamento após o login
    
    setTimeout(() => {
      setIsLoggingIn(false);
      navigate('/home');
    }, 3000);
  }   
  
  if (isLoggingIn) {
    // Exibe o carregamento após o login
    return <Loading />;
  } 
    function cadastro() {
      navigate('/cadastro');
    }

  return (
    <>
      <div className={style.bodyLogin}>
        <div className={style.containerLogin}>
          <div className={style.cardLogin}>
            <h1 className={style.tituloLogin}>Bem vindo(a)!</h1>

            <form onSubmit={handleLogin}>
              <label className={style.labelLogin} htmlFor="email">E-mail</label>
              <input className={style.inputLogin} id="email" type="text" required />

              <label className={style.labelLogin} htmlFor="senha">Senha</label>

              <div className={style.inputSenha}>
                <input className={style.inputLogin} id="senha" type={mostrarSenha ? 'text' : 'password'} required />

                <section onClick={toggleSenha} className={style.olhos}>
                  {mostrarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                </section>
              </div>

              <a href="/recuperar" className={style.forgotPassword}>Esqueceu a senha?</a>

              <section className={style.buttonLogin}>
                <button type="submit">Entrar</button>
              </section>

              <section style={{ display: 'flex', justifyContent: "center", gap: "10px" }}>
                <p style={{ color: "#fff" }}> Não tem uma conta? </p>
                <p className={style.cadastre} onClick={cadastro}>Cadastre-se</p>
              </section>
            </form>
          </div>

          <div className={style.fraseLoginDiv}>
            <h2 className={style.fraseLogin}>Encontre oportunidades desde cedo na sua região!</h2>
          </div>
        </div>
      </div>
    </>
  );
}