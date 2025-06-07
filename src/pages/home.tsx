import { Cards } from '../components/cards'
import Nav from '../components/navbar'
import style from '../style/home.module.css'
import PerfilHome from '../components/perfilHome'
import Chat from '../components/chat'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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

        <section id="feed">
          <h2 className={style.cardsTitulo}>Seu Feed</h2>
          <PerfilHome />
        </section>
      </div>
    </div>
  )
}
