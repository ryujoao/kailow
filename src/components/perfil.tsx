
import style from "../style/perfil.module.css"

export default function Perfil() {
    return (
        <>
            <div className={style.perfilContainer}>
                <div className={style.mainContainer}>
                    <div className={style.feedSection}>


                        <div className={style.postCard}>

                            <section style={{paddingLeft: "5dvh"}}>
                            <h3 className={style.postUser}>Fulano da Silva</h3>
                            <h3 className={style.postHoras}>Há 11 horas</h3>
                            </section>

                            <div className={style.postBody}></div>

                            <section style={{paddingLeft: "5dvh"}}>
                            <h3 className={style.postDescricao}>Legenda</h3>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}