import style from '../style/bannerHome.module.css'

export function BannerHome() {

    return (
        <>
        <div className={style.banner}>
        <img src="../public/img/banner.png" alt="Imagem banner home" className={style.bannerImg}/>
        
        <section className={style.textoBanner}>
        <h1>Seja Bem-Vindo ao Kailow</h1>
        <h2>Tenha experiências únicas</h2>
        </section>
        </div>
        </>
    )

}