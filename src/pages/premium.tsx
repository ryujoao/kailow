import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/premium.module.css"

export default function Premium() {
    return (
        <>
            <Nav />
            <div className={style.bodyPremium}>
                <div className={style.containerPremium}>
                    <h1 className={style.textoPremium}>Seja Premium</h1>
                    <p className={style.textoPremium2}>Tenha acesso a mais de 100 cursos, palestras e muito mais!</p>
                    <button className={style.buttonPremium}>Quero ser Premium</button>
                </div>
            </div>
            <Footer />
        </>
    )
}