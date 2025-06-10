// INÍCIO DO ARQUIVO HOME.TSX

import { Cards } from '../components/cards'
import Nav from '../components/navbar'
import style from '../style/home.module.css'
import PerfilHome from '../components/perfilHome'
import Chat from '../components/chat'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// INÍCIO DO COMPONENTE HOME
export default function Home() {
  // INÍCIO DO HOOK DE LOCALIZAÇÃO
  const location = useLocation();
  // FIM DO HOOK DE LOCALIZAÇÃO

  // INÍCIO DO USEEFFECT PARA SCROLL
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  // FIM DO USEEFFECT PARA SCROLL

  // INÍCIO DO RETORNO DO COMPONENTE
  return (
    <div className={style.homeContainer}>
      {/* INÍCIO NAVBAR */}
      <Nav />
      {/* FIM NAVBAR */}
      <div className={style.homeBody}>
        <section>
          <h1 className={style.cardsTitulo}>Comunidades para você</h1>
          <div className={style.cardsContainerHome}>
            {/* INÍCIO CARDS */}
            <Cards />
            {/* FIM CARDS */}
          </div>
        </section>

        {/* INÍCIO CHAT */}
        <Chat />
        {/* FIM CHAT */}

        <section id="feed">
          <h2 className={style.feedTitulo}>Seu Feed</h2>
          {/* INÍCIO PERFILHOME */}
          <PerfilHome />
          {/* FIM PERFILHOME */}
        </section>
      </div>
    </div>
  )
  // FIM DO RETORNO DO COMPONENTE
}
// FIM DO COMPONENTE HOME

// FIM DO ARQUIVO HOME.TSX