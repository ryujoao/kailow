import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/config.module.css"


export default function Configurações() {
  return (
    <>
      <Nav />
      <div className={style.bodyConfig}>
        <h1 className={style.configHeader}>Configurações</h1>
        <div className={style.configContainer}>

          <div className={style.configMain}>
            <section className={style.configSection}>
              <h2 className={style.configTitle}>Preferências de Conta</h2>
              <div className={style.configItem}>
                <label htmlFor="senha">Sua Senha:</label>
                <input className={style.configInput} type="text" id="username" placeholder="Digite sua senha atual" />
              </div>
              <div className={style.configItem}>
                <label htmlFor="novaSenha">Nova Senha:</label>
                <input className={style.configInput} type="email" id="email" placeholder="Digite uma nova senha" />
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
                  <input type="checkbox" id="notifications" checked />
                  <label htmlFor="notifications">Receber notificações por e-mail</label>
                </div>
              </div>
              <div className={style.configItem}>
                <div className={style.checkbox}>
                  <input type="checkbox" id="analytics" checked />
                  <label htmlFor="analytics">Compartilhar dados para análises</label>
                </div>
              </div>
            </section>

            <h3 className={style.configTermos} style={{ marginBottom: "30px" }}>Ler os termos de uso e política de privacidade</h3>
            <h3 className={style.configTermos}>Deletar minha conta</h3>

          </div>

          <section className={style.configFooter}>
            <button className={style.btnPrimary}>Salvar Alterações</button>
          </section>


        </div>
      </div>
      <Footer />
    </>

  )

}