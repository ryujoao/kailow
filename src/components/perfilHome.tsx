import style from "../style/perfilHome.module.css";

export default function PerfilHome() {
  return (
    <>
      <div className={style.perfilContainer}>
        <div className={style.mainContainer}>
          <div className={style.feedSection}>
            <div className={style.postCard}>
              <section style={{ paddingLeft: "5dvh" }}>
                <h3 className={style.postUser}>Passeios com pets MAX</h3>
                <h3 className={style.postHoras}>Há 5 horas</h3>
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
          </div>
        </div>
      </div>
    </>
  );
}
