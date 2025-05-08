
import style from "../style/perfil.module.css"

export default function Perfil() {
    return (
        <>
            <div className={style.perfilContainer}>
                <div className={style.mainContainer}>
                    <div className={style.feedSection}>
                        <h2 className={style.feedTitle}>Seu Feed</h2>


                        <div className={style.postCard}>

                            <h3 className={style.postHeader}>Você publicou isso</h3>
                            <h3 className={style.postHoras}>Há 11 horas</h3>
                            <div className={style.postBody}></div>
                        </div>

                        <div className={style.postCard}>

                            <h3 className={style.postHeader}>Você publicou isso</h3>
                            <h3 className={style.postHoras}>Há 11 horas</h3>
                            <div className={style.postBody}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}