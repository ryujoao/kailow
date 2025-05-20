import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/config.module.css"


export default function Configurações() {
  return (
    <>
    <Nav />
    <div className={style.bodyConfig}>
      <div className={style.configContainer}>
        <div className={style.configHeader}>
          <h1>Configurações</h1>
        </div>

        <main className={style.configMain}>
          <section className={style.configSection}>
            <div className={style.configTitle}>
              <h2>Preferências de Conta</h2>
            </div>
            <div className={style.configItem}>
              <label for="username">Sua Senha:</label>
              <input type="text" id="username" placeholder="Digite sua senha atual" />
            </div>
            <div className={style.configItem}>
              <label for="email">Nova Senha:</label>
              <input type="email" id="email" placeholder="Digite uma nova senha" />
            </div>
            <div className={style.configItem}>
              <label for="language">Idioma</label>
              <select id="language">
                <option value="pt">Português</option>
                <option value="en">Inglês</option>
                <option value="es">Espanhol</option>
              </select>
            </div>
          </section>

          <section className={style.configSection}>
            <div className={style.configTitle}>
              <h2>Preferências de Privacidade</h2>
            </div>
            <div className={style.configItem}>
              <div className={style.checkbox}>
              <input type="checkbox" id="notifications" checked />
                <label for="notifications">Receber notificações por e-mail</label>
              </div>
            </div>
            <div className={style.configItem}>
           <div className={style.checkbox}>
              <input type="checkbox" id="analytics" checked />
                <label for="analytics">Compartilhar dados para análises</label>
                </div>
                </div>
          </section>
        </main>

        <section className={style.configFooter}>
          <div className={style.btn}>
            <button className={style.btnPrimary}>Salvar Alterações</button>
            <button className={style.btnSecondary}>Cancelar</button>
          </div>
        </section>

        
      </div>
      <Footer />
    </div>
    </>

  )

}