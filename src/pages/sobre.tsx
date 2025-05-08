import { Nav } from "../components/navbar"
import style from "../style/sobre.module.css"

export function Sobre() {
    return (
        <div className={style.bodySobre}>
            <Nav />
            <div className={style.containerSobre}>
                <h1 className={style.tituloSobre}>Saiba um pouco mais</h1>

                <div className={style.textoSobre}>
                    <p> 
                        Sabemos como é difícil para jovens menores de 18 anos conseguir uma renda extra.
                        Seja para ajudar em casa, pagar seus estudos ou ter mais independência,
                        muitos adolescentes têm vontade de trabalhar, mas esbarram na falta de oportunidades. <br /><br />
                        Foi pensando nisso que criamos o Kailow – uma plataforma digital feita especialmente para
                        quem ainda não atingiu a maioridade, mas quer começar a ganhar seu próprio dinheiro. <br /><br />
                        Aqui, jovens como você encontram oportunidades reais de trabalho flexível, que se encaixam
                        na rotina de estudos, e ainda recebem uma remuneração mensal.Porque acreditamos que idade
                        não deveria ser um limite para quem quer crescer.
                    </p>
                </div>
            </div>
        </div>
    );
}