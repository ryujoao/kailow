import { useNavigate } from 'react-router-dom';
import style from '../style/login.module.css';
import * as Icon from 'react-bootstrap-icons';
import { useState } from 'react';
import Loading from '../components/loader';
import { useForm } from 'react-hook-form';

type loginType = {
  userId: number,
  email: string,
  senha: string,
}

export default function Login() {

  const { register, handleSubmit } = useForm<loginType>()
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("")
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Controla o carregamento após o login
  const navigate = useNavigate();


  async function handlelogin(data: loginType) {
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const res = await response.json(); // <-- Pegue o token aqui
        localStorage.setItem("token", res.token); // <-- Salve o token
        console.log("Token recebido:", res.token);

        setIsLoggingIn(true)

        console.log(res)
        localStorage.setItem("userId", res.userId);
        localStorage.setItem("token", res.token);

        setIsLoggingIn(true);
        setTimeout(() => {
          setIsLoggingIn(false);
          navigate("/home");
        }, 3000);
        console.log("Login realizado com sucesso!");
      } else {
        const res = await response.json();
        console.error("Erro ao realizar login:", response.statusText);
        setMensagem(res.error);
      }
    } catch (error: any) {
      console.error("Erro na requisição:", error);
      setMensagem(error.message);
    }
  }

  function toggleSenha() {
    setMostrarSenha(!mostrarSenha);
  }



  if (isLoggingIn) {
    return <Loading />;
  }

  function cadastro() {
    navigate('/cadastro');
  }

  return (
    <>
      <div className={style.bodyLogin}>
        <div className={style.containerLogin}>
          <div className={style.fraseLoginDiv}>
            <h2 className={style.fraseLogin}>Encontre oportunidades desde cedo na sua região!</h2>
          </div>
          <div className={style.cardLogin}>
            <h1 className={style.tituloLogin}>Bem vindo(a)!</h1>

            <form onSubmit={handleSubmit(handlelogin)}>

              <label className={style.labelLogin} htmlFor="email">E-mail</label>
              <input className={style.inputLogin} id="email" type="email" required {...register("email")} />

              <label className={style.labelLogin} htmlFor="senha">Senha</label>

              <div className={style.inputSenha}>
                <input className={style.inputLogin} id="senha" type={mostrarSenha ? 'text' : 'password'} required {...register("senha")} />

                <section onClick={toggleSenha} className={style.olhos}>
                  {mostrarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                </section>

              </div>

              <div className={style.mensagem}>{mensagem}</div>

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

        </div>
      </div>
    </>
  );
}