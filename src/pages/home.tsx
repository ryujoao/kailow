import { Cards } from '../components/cards'
import Nav from '../components/navbar'
import style from '../style/home.module.css'
import PerfilHome from '../components/perfilHome'
import PerfilHome2 from '../components/perfilHome2'
import PerfilHome3 from '../components/perfilHome3'
import Chat from '../components/chat' 

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <Nav />
      <div className={style.homeBody}>
        <section>
          <h1 className={style.cardsTitulo}>Comunidades para você</h1>
          <div className={style.cardsContainerHome}>
            <Cards />
          </div>
        </section>

        <Chat />

        <section>
          <h2 className={style.cardsTitulo}>Seu Feed</h2>
          <PerfilHome />
          <PerfilHome2 />
          <PerfilHome3 />
        </section>
      </div>
    </div>
  )
}
