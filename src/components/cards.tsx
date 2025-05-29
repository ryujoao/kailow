import { useNavigate } from "react-router-dom";
import styles from "../style/comunidades.module.css";
import * as Icon from 'react-bootstrap-icons';


export function Cards() {
  const navigate = useNavigate();
  // const [isFilled, setIsFilled] = useState(false);
  // const Fill = () => {
  //   setIsFilled(!isFilled);
  // };

  // const [isFilled2, setIsFilled2] = useState(false);
  // const Fill2 = () => {
  //   setIsFilled2(!isFilled2);
  // };


  function Comunidades() {
    navigate('/comunidades');
  }

  return (
    <>

      <div className={styles.cardBody}>

        <div className={styles.cardComuContainer}>
          {/* Minhas Comunidades */}
          {/* <section className={styles.myComunidades}> */}

            <div className={styles.cardsComunidades}>

              {/* Card 1 */}
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img
                    src="../public/img/restaurante.jpg"
                    className={styles.imgComunidaderes}
                    alt="Imagem de fundo"
                  />
                  <img
                    src="../public/img/restaurante.jpg"
                    className={styles.imgComunidaderee}
                    alt="Imagem sobreposta"
                  />
                </div>
                <div className={styles.comunidadesInfo}>
                  <h2 className={styles.comunidadeSlogan} >Restaurante Seringueira</h2>
                  <h5 className={styles.comunidadeLocal}>
                    <Icon.GeoAltFill className={styles.iconMapComunidades} />
                    Lapa
                  </h5>
                  <p className={styles.comunidadeDescricao}>
                    Descubra oportunidades de trabalho e aprendizado no setor de
                    gastronomia.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img
                    src="../public/img/desenvolvedores.jpg"
                    className={styles.imgComunidaderes}
                    alt="Imagem de fundo"
                  />
                  <img
                    src="../public/img/desenvolvedores.jpg"
                    className={styles.imgComunidaderee}
                    alt="Imagem sobreposta"
                  />
                </div>
                <div className={styles.comunidadesInfo}>
                  <h2 className={styles.comunidadeSlogan} >Desenvolvedores Taparoxo</h2>
                  <h5 className={styles.comunidadeLocal}>
                    <Icon.GeoAltFill className={styles.iconMapComunidades} />
                    São Paulo
                  </h5>
                  <p className={styles.comunidadeDescricao}>
                    Uma comunidade para jovens programadores explorarem novas
                    tecnologias e projetos.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img
                    src="../public/img/artigoesportes.jpg"
                    className={styles.imgComunidaderes}
                    alt="Imagem de fundo"
                  />
                  <img
                    src="../public/img/artigoesportes.jpg"
                    className={styles.imgComunidaderee}
                    alt="Imagem sobreposta"
                  />
                </div>
                <div className={styles.comunidadesInfo}>
                  <h2 className={styles.comunidadeSlogan} >Loja de artigos esportivos Inter League</h2>
                  <h5 className={styles.comunidadeLocal}>
                    <Icon.GeoAltFill className={styles.iconMapComunidades} />
                    Vila Madalena
                  </h5>
                  <p className={styles.comunidadeDescricao}>
                    Conecte-se com profissionais do setor esportivo e explore
                    oportunidades de trabalho.
                  </p>
                </div>
              </div>

            </div>
          {/* </section> */}
        </div>

        <div className={styles.comunidadesBtn}>
          <button onClick={Comunidades} className={styles.btnVerMais}>Ver Mais</button>
        </div>
      </div>
    </>
  );
}