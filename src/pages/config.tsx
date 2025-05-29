import { useForm } from "react-hook-form";
import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/config.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons"

type configType = {
  id: number,
  senha: string,
  novaSenha: string
}

export default function Configurações() {
  
  const userId = Number(localStorage.getItem("userId"));
  const { register, handleSubmit } = useForm<configType>({
    defaultValues: {
      id: userId,
    },
  })

  const [mensagem, setMensagem] = useState("")
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarSenha2, setMostrarSenha2] = useState(false);
  const navigate = useNavigate();

  async function handleconfig(data: configType) {
    console.log(data)

    try {
      const response = await fetch(`http://localhost:3000/configuracao/${data.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {


        navigate("/")

        console.log("Senha atualizada com sucesso!");
      } else {

        const res = await response.json()
        console.error("Erro ao atualizar senha:", response.statusText);
        setMensagem(res.error)
      }
    } catch (error: any) {
      console.error("Erro na requisição:", error);
      setMensagem(error.message)
    }
  }

  function toggleSenha() {
    setMostrarSenha(!mostrarSenha);
  }

  function toggleSenha2() {
    setMostrarSenha2(!mostrarSenha2);
  }

  return (
    <>
      <Nav />
      <div className={style.bodyConfig}>
        <h1 className={style.configHeader}>Configurações</h1>
        <div className={style.configContainer}>

          <div className={style.configMain}>

            <form onSubmit={handleSubmit(handleconfig)} method="post">
              <section className={style.configSection}>
                <h2 className={style.configTitle}>Preferências de Conta</h2>

                <input type="hidden" {...register("id")}/>

                <div className={style.configItem}>
                  <label htmlFor="senha">Sua Senha:</label>

                  <div className={style.inputSenha}>
                    <input className={style.configInput} type={mostrarSenha ? 'text' : 'password'} id="senha" placeholder="Digite sua senha atual" autoComplete="off" {...register("senha")} />

                    <section onClick={toggleSenha} className={style.olhos}>
                      {mostrarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                    </section>
                  </div>
                  <div style={{ color: "red" }}>{mensagem}</div>
                </div>

                <div className={style.configItem}>
                  <label htmlFor="novaSenha">Nova Senha:</label>

                  <div className={style.inputSenha}>
                    <input className={style.configInput} type={mostrarSenha2 ? 'text' : 'password'} id="novaSenha" placeholder="Digite uma nova senha" autoComplete="off" {...register("novaSenha")} />

                    <section onClick={toggleSenha2} className={style.olhos}>
                      {mostrarSenha2 ? <Icon.Eye /> : <Icon.EyeSlash />}
                    </section>
                  </div>
                </div>

                <div className={style.configItem}>
                  <label htmlFor="language">Idioma</label>
                  <select className={style.configInput} id="language">
                    <option value="pt">Português</option>
                    <option value="en">Inglês</option>
                    <option value="es">Espanhol</option>
                  </select>
                </div>
              </section>

              <section className={style.configSection}>
                <h2 className={style.configTitle}>Preferências de Privacidade</h2>
                <div className={style.configItem}>
                  <div className={style.checkbox}>
                    <input type="checkbox" id="notifications" defaultChecked />
                    <label htmlFor="notifications">Receber notificações por e-mail</label>
                  </div>
                </div>
                <div className={style.configItem}>
                  <div className={style.checkbox}>
                    <input type="checkbox" id="analytics" defaultChecked />
                    <label htmlFor="analytics">Compartilhar dados para análises</label>
                  </div>
                </div>
              </section>

              <h3 className={style.configTermos} style={{ marginBottom: "30px" }}>Ler os termos de uso e política de privacidade</h3>
              <h3 className={style.configTermos}>Deletar minha conta</h3>

              <section className={style.configFooter}>
                <button type="submit" className={style.btnPrimary}>Salvar Alterações</button>
              </section>

            </form>
          </div>


        </div>
      </div >
      <Footer />
    </>

  )

}