import { useState } from "react";
import style from "../style/cards.module.css";
import * as Icon from 'react-bootstrap-icons'


export function Cards() {
  const [isFilled, setIsFilled] = useState(false);
  const Fill = () => {
    setIsFilled(!isFilled);
  };

  const [isFilled2, setIsFilled2] = useState(false);
  const Fill2 = () => {
    setIsFilled2(!isFilled2);
  };


  return (
    <>

      <div className={style.containerCard}>
        <div className={style.card}>
          <h1>Programa de estágio Bradesco</h1>

          <section className={style.localCard}>
            <Icon.GeoAltFill />
            <h2>São Paulo - SP</h2>
          </section>
        </div>

        <div className={style.cardIcons}>

          <div className={style.like} onClick={Fill2}>
            <p className={style.cardText}>Curtir</p>

            <section className={style.numberIcon}>
              <section className={style.icon} style={{ display: isFilled2 ? "none" : "block" , color: "#fff", paddingRight: "1dvh"}}>
                <Icon.HandThumbsUp />
              </section>

              <section className={style.iconFill} style={{ display: isFilled2 ? "block" : "none", color: "#0d6efd", paddingRight: "1dvh"}}>
                <Icon.HandThumbsUpFill />
              </section>
              <p className={style.numCurtidas}>538</p>
            </section>
          </div>

          <div className={style.comment} onClick={Fill}>
            <p className={style.cardText}>Comentários</p>

            <section className={style.numberIcon}>
              <section className={style.icon} style={{ display: isFilled ? "none" : "block" , color: "#fff", paddingRight: "1dvh"}}>
                <Icon.Chat />
              </section>

              <section className={style.iconFill} style={{ display: isFilled ? "block" : "none" , color: "#0d6efd", paddingRight: "1dvh"}}>
                <Icon.ChatFill />
              </section>
              <p className={style.numComentarios}>223</p>
            </section>
          </div>

        </div>
      </div>
    </>
  );
}