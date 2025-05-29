
import style from "../style/perfilHome.module.css"

export default function PerfilHome() {
    return (
        <>
            <div className={style.perfilContainer}>
                <div className={style.mainContainer}>
                    <div className={style.feedSection}>


                        <div className={style.postCard}>

                            <section style={{paddingLeft: "5dvh"}}>
                            <h3 className={style.postUser}>Jerfeson Oliveira</h3>
                            <h3 className={style.postHoras}>Há 3 dias</h3>
                            </section>

                            <div className={style.postBody}> <img className={style.fotoFeed3} src="../public/img/JEFERSON.jpeg" alt="" /></div>
                            

                            <section style={{paddingLeft: "5dvh"}}>
                            <h3 className={style.postDescricao}>Primeiro dia de trabalho no Supermercado Kipago, muito feliz e realizado👌😁😊
                                <br />
                                <br />
                                #feliz #freelance #kailow #realizado #freelancer #kipago
                            </h3>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}