import { Cards } from '../components/cards'
import { Nav } from '../components/navbar'
// import { BannerHome } from '../components/bannerHome'
import style from '../style/home.module.css'
import Perfil from '../components/perfil'


export default function Home() {
  return (
    <div className={style.homeContainer}>
      <Nav />
      <div className={style.homeBody}>
      {/* <BannerHome /> */}
      <section>
        <h1 className={style.cardsTitulo}>Comunidades para você</h1>
        <div className={style.cardsContainerHome}>
          <Cards />
          <Cards />
          <Cards />
        </div>
        </section>

        <section>
        <h2 className={style.feedTitle}>Seu Feed</h2>
        <Perfil />
        <Perfil />
        <Perfil />
      </section>
      </div>
    </div>
  )
}
