import styles from "../style/comunidades.module.css"; // Supondo que você tenha um arquivo CSS Module
import Nav from "../components/navbar";
import * as Icon from 'react-bootstrap-icons';
import { Footer } from "../components/footer";

export default function Comunidades() {
    return (
        <div className={styles.comuBody}>
            <Nav />

            <div className={styles.comuContainer}>
                {/* Minhas Comunidades */}
                <section className={styles.myComunidades}>
                    <h1 className={styles.titleComu}>Minhas Comunidades</h1>

                    <div className={styles.cardsComunidades}>

                        {/* Card 1 */}
                        <div className={styles.card}>
                            <div className={styles.imgContainer}>
                                <img
                                    src="../public/img/passearComCachorro.jpg"
                                    className={styles.imgComunidaderes}
                                    alt="Imagem de fundo"
                                />
                                <img
                                    src="../public/img/passearComCachorro.jpg"
                                    className={styles.imgComunidaderee

                                    }
                                    alt="Imagem sobreposta"
                                />
                            </div>
                            <div className={styles.comunidadesInfo}>
                                <h2 className={styles.comunidadeSlogan}>Passeio com pets MAX</h2>
                                <h5 className={styles.comunidadeLocal}>
                                    <Icon.GeoAltFill className={styles.iconMapComunidades} />
                                    São Paulo
                                </h5>
                                <p className={styles.comunidadeDescricao} >
                                    Um espaço dedicado a tutores que buscam os melhores lugares para
                                    passear com seus pets.
                                </p>    
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.card}>
                            <div className={styles.imgContainer}>
                                <img
                                    src="../public/img/marketingDigital.jpg"
                                    className={styles.imgComunidaderes}
                                    alt="Imagem de fundo"
                                />
                                <img
                                    src="../public/img/marketingDigital.jpg"
                                    className={styles.imgComunidaderee}
                                    alt="Imagem sobreposta"
                                />
                            </div>
                            <div className={styles.comunidadesInfo}>
                                <h2 className={styles.comunidadeSlogan} >Marketing Digital Moskou</h2>
                                <h5 className={styles.comunidadeLocal}>
                                    <Icon.GeoAltFill className={styles.iconMapComunidades} />
                                    Moema
                                </h5>
                                <p className={styles.comunidadeDescricao}>
                                    Networking e tendências de marketing digital para freelancers na Moskou.
                                </p>  
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.card}>
                            <div className={styles.imgContainer}>
                                <img
                                    src="../public/img/supermercado.jpg"
                                    className={styles.imgComunidaderes}
                                    alt="Imagem de fundo"
                                />
                                <img
                                    src="../public/img/supermercado.jpg"
                                    className={styles.imgComunidaderee}
                                    alt="Imagem sobreposta"
                                />
                            </div>
                            <div className={styles.comunidadesInfo}>
                                <h2 className={styles.comunidadeSlogan} >Supermercado KiPago</h2>
                                <h5 className={styles.comunidadeLocal}>
                                    <Icon.GeoAltFill className={styles.iconMapComunidades} />
                                    Mooca
                                </h5>
                                <p className={styles.comunidadeDescricao}>
                                    Supermercados KiPago na região! Aqui você
                                    encontra dicas, oportunidades de trabalho.
                                </p>    
                            </div>
                        </div>

                    </div>
                </section>



                {/* Sugestões para você */}
                <section className={styles.sugComunidades}>
                    <h1 className={styles.titleComu} style={{marginTop: "10vh"}}>Sugestões</h1>

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
                                <h2 className={styles.comunidadeSlogan} >Loja de artigos esportivos InterLeague</h2>
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
                </section>
            </div>
            <Footer />
        </div>
    );
}