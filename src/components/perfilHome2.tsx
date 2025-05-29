import style from "../style/perfilHome2.module.css";

export default function PerfilHome() {
  return (
    <>
      <div className={style.perfilContainer}>
        <div className={style.mainContainer}>
          <div className={style.feedSection}>
            <div className={style.postCard}>
              <section style={{ paddingLeft: "5dvh" }}>
                <h3 className={style.postUser}>Restaurante Seringueira</h3>
                <h3 className={style.postHoras}>Há 2 dias</h3>
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
          </div>
        </div>
      </div>
    </>
  );
}
