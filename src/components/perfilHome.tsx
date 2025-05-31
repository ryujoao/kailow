
import style from "../style/perfilHome.module.css"

export default function PerfilHome() {
    return (
        <>
            <div className={style.perfilContainer}>
                <div className={style.mainContainer}>
                    <div className={style.feedSection}>


                        <div className={style.postCard}>
                            <section style={{ paddingLeft: "5dvh", display: "flex", flexDirection: "row", alignItems: "center" }}>
                               
                                <img src="../public/img/passearComCachorro.jpg" alt="" className={style.iconPerfil}/>
                                <section>
                                    <h3 className={style.postUser}>Passeios com pets MAX</h3>
                                    <h3 className={style.postHoras}>Há 5 horas</h3>
                                </section>
                            </section>

                            <div className={style.postBody}>
                                {" "}
                                <img
                                    className={style.fotoFeed}
                                    src="../public/img/CACHORRO.png"
                                    alt=""
                                />
                            </div>

                            <section style={{ paddingLeft: "5dvh" }}>
                                <h3 className={style.postDescricao}>
                                    ✅ Exercício + ar livre <br />✅ Flexibilidade de horário <br /> ✅
                                    Bonificação por desempenho <br />✅ Treinamento incluso <br />💬 Ama
                                    animais? Venha trabalhar conosco! 📩 #Vagas #PetLove
                                    #TrabalheComAmor
                                </h3>
                            </section>
                        </div>

                        <div className={style.postCard}>
                            <section style={{ paddingLeft: "5dvh", display: "flex", flexDirection: "row", alignItems: "center" }}>
                               
                                <img src="../public/img/supermercado.jpg" alt="" className={style.iconPerfil}/>

                                <section>
                                    <h3 className={style.postUser}>Restaurante Seringueira</h3>
                                    <h3 className={style.postHoras}>Há 2 dias</h3>
                                </section>
                            </section>

                            <div className={style.postBody}>
                                {" "}
                                <img
                                    className={style.fotoFeed}
                                    src="../public/img/RESTAURANTE.png"
                                    alt=""
                                />
                            </div>

                            <section style={{ paddingLeft: "5dvh" }}>
                                <h3 className={style.postDescricao}>
                                    ✅ Treinamento incluso <br />✅ Gorjetas + benefícios <br /> ✅
                                    Flexibilidade de horários <br /> ✅ Oportunidade de crescimento <br /> 💬
                                    Gosta de atendimento? Venha fazer parte do nosso time! 📩
                                    #Vagas #Restaurante #TrabalheConosco
                                </h3>
                            </section>
                        </div>


                        <div className={style.postCard}>
                            <section style={{ paddingLeft: "5dvh", display: "flex", flexDirection: "row", alignItems: "center" }}>
            
                                <img src="../public/img/jeferson.png" alt="" className={style.iconPerfil}/>

                                <section>
                                    <h3 className={style.postUser}>Jerfeson Oliveira</h3>
                                    <h3 className={style.postHoras}>Há 3 dias</h3>
                                </section>
                            </section>

                            <div className={style.postBody}> <img className={style.fotoFeed} src="../public/img/jeferson.png" alt="" /></div>


                            <section style={{ paddingLeft: "5dvh" }}>
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