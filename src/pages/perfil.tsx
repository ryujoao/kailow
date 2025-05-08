import { Nav } from "../components/navbar"
import style from "../style/perfil.module.css"

export default function Perfil() {
    return (
        <>
            <div className={style.perfilContainer}>
                <Nav />
                <div className={style.mainContainer}>
                    <div className={style.profileSection}>
                        <h1 className={style.profileTitle}>Perfil</h1>

                        <div className={style.profileInfo}>
                            <h2 className={style.profileName}>Antonio Kobayashi</h2>
                            <p className={style.profileDescription}>Estudante técnico em desenvolvimento de sistemas pelo <strong>SENAI Cotia - Escola SENAI "Ricardo Lerner"</strong></p>

                            <div className={style.profileInterests}>
                                <h3>Interesses de vaga em:</h3>
                                <ul className={style.interestList}>
                                    <li>Estagiário</li>
                                    <li>Aprendiz</li>
                                </ul>

                            </div>

                            <strong className={style.profileResume}>Informações pessoais e Curriculum:</strong>

                            <button className={style.editProfileButton} >Editar perfil</button>

                        </div>
                    </div>
                    <div className={style.vertical}></div>
                    <div className={style.feedSection}>
                        <h2 className={style.feedTitle}>Seu Feed</h2>


                        <div className={style.postCard}>

                            <h3 className={style.postHeader}>Você publicou isso</h3>
                            <h3 className={style.horas}>Há 11 horas</h3>
                            <div className={style.postBody}></div>
                        </div>

                        <div className={style.postCard}>

                            <h3 className={style.postHeader}>Você publicou isso</h3>
                            <h3 className={style.horas}>Há 11 horas</h3>
                            <div className={style.postBody}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}