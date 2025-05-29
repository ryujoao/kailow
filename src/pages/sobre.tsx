import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/sobre.module.css"

export default function Sobre() {
    return (
        <div className={style.bodySobre}>
            <Nav />

            <div className={style.containerSobre}>

                {/* <div className={style.divTitle}>
                <h1 className={style.tituloSobre}>Sobre nós</h1>
                </div> */}
                          <div className={style.divTitle}>
                           <h1 className={style.tituloSobre}>Nossa história</h1>
                           </div>

                < div className={style.cardSobre}>                          
                    <section className={style.tudoSobre}>

                        <p className={style.textoSobre}>
                            A proposta do Kailow surgiu da identificação de uma lacuna no mercado:
                            a dificuldade enfrentada por menores de 18 anos em obter uma fonte de
                            renda extra. Diante desse desafio, desenvolvemos uma plataforma
                            digital que permite a jovens, que ainda não atingiram a maioridade,
                            acessarem oportunidades de trabalho e gerarem remuneração mensal. O
                            Kailow funciona como um ambiente integrado, onde os usuários podem
                            tanto contratar serviços quanto se candidatar a vagas, dependendo do
                            tipo de cadastro realizado.
                        </p>
                        <p className={style.textoSobre}> O nome "Kailow" é uma combinação de duas palavras: "Kai", que
                            representa o conceito de "mar" em havaiano, simbolizando a vastidão
                            de oportunidades disponíveis, e "low", que remete à ideia de
                            acessibilidade e inclusão. Assim, o Kailow se propõe a ser um espaço
                            onde todos podem navegar e encontrar seu lugar no mercado de trabalho.
                        </p>
                    </section>
                    <div/>

                         <div className={style.divTitle}>
                        <h1 className={style.tituloSobre}>Diferenciais da plataforma Kailow</h1>
                        </div>

                    <div className={style.cardSobre}>
                    <section className={style.tudoSobre}>


                        <ul className={style.listaSobre}>
                            <li> ✔ Cadastro Simplificado – Processo ágil com validação de identidade
                                e autorização parental integrada.</li>
                            <li>✔ Match Inteligente – Sistema de recomendação que conecta
                                adolescentes a vagas alinhadas com seus interesses e habilidades.</li>
                            <li> ✔ Ambiente Seguro – Todas as oportunidades são pré-analisadas, com
                                contratos claros e mecanismos de proteção ao menor.</li>
                            <li>✔ Dashboard de Progresso – Ferramentas visuais para acompanhamento
                                de ganhos, habilidades desenvolvidas e avaliações.</li>
                        </ul>

                    </section>
                    </div>
                    <div className={style.divTitle}>
                       <h1 className={style.tituloSobre}>Benefícios para todos os stackholders</h1>
                    </div>
                       
                    <div className={style.cardSobre}>
                    <section className={style.tudoSobre}>

                        <ul className={style.listaSobre}>
                            <li><strong>Para adolescentes: </strong>Primeira experiência
                                profissional remunerada com flexibilidade para conciliar estudos.</li>
                            <li><strong>Para famílias: </strong>Tranquilidade de um ambiente
                                supervisionado e educativo.</li>
                            <li><strong>Para empresas: </strong> Acesso a uma nova geração de
                                talentos digitais nativos, com linguagem e criatividade alinhadas ao
                                mercado futuro.</li>
                        </ul>

                        <p className={style.textoSobre}>Com tecnologia proprietária de matching e um modelo de governança
                            inovador, o Kailow está redefinindo como a sociedade enxerga o
                            potencial produtivo da adolescência, criando um ecossistema onde todos
                            ganham.</p>
                    </section>
                    </div>

                       <div className={style.divTitle}>
                        <h1 className={style.tituloCardSobre}>Nossos desenvolvedores</h1>
                        </div>

                    <div className={style.cardSobre}>
                    <section className={style.tudoSobre}>

                        <div className={style.devs}>

                            {/* bea */}
                            <div className={style.singleDev}>
                                <img className={style.devImg} src="../public/img/anaBeatriz.jpg" alt="ana beatriz paludetto barreto" />

                                <div className={style.devContent}>
                                    <h2>Ana Beatriz Paludetto Barreto</h2>
                                </div>
                            </div>
                            {/* gabi */}
                            <div className={style.singleDev}>
                                <img className={style.devImg} src="../public/img/gabriely.jpg" alt="gabriely felix de souza" />

                                <div className={style.devContent}>
                                    <h2>Gabriely Félix de Souza</h2>
                                </div>
                            </div>
                            {/* guilherme */}
                            <div className={style.singleDev}>
                                <img src="../public/img/guilherme.jpg" alt="guilherme uliana dos santos" />
                                <div className={style.devContent}>
                                    <h2>Guilherme Uliana dos Santos</h2>
                                </div>
                            </div>
                            {/* ryu */}
                            <div className={style.singleDev}>
                                <img src="../public/img/ryu.jpeg" alt="joão victor ryu tuzino kobayashi" />
                                <div className={style.devContent}>
                                    <h2>João Victor Ryu Tuzino Kobayashi</h2>
                                </div>
                            </div>
                            {/* kaio */}
                            <div className={style.singleDev}>
                                <img src="../public/img/kaio.jpg" alt="kaio gabriel tavares da silva" />
                                <div className={style.devContent}>
                                    <h2>Kaio Gabriel Tavares da Silva</h2>
                                </div>
                            </div>
                            {/* murilo */}
                            <div className={style.singleDev}>
                                <img src="../public/img/murilo.jpg" alt="murilo leite ribeiro" />
                                <div className={style.devContent}>
                                    <h2>Murilo Leite Ribeiro</h2>
                                </div>
                            </div>
                            {/* messias */}
                            <div className={style.singleDev}>
                                <img src="../public/img/messias.jpg" alt="pedro messias de oliveira santos" />
                                <div className={style.devContent}>
                                    <h2>Pedro Messias de Oliveira Santos</h2>
                                </div>
                            </div>
                            {/* renan */}
                            <div className={style.singleDev}>
                                <img src="../public/img/renan.jpg" alt="renan cabral bernardes" />
                                <div className={style.devContent}>
                                    <h2>Renan Cabral Bernardes</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}