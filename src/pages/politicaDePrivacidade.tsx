import { Footer } from "../components/footer";
import Nav from "../components/navbar";
import style from "../style/privacidade.module.css";

export default function PoliticaDePrivacidade() {

    return (
        <div className={style.bodyPdp}>
            <Nav />
            <div className={style.containerPdp}>

                <div className={style.divTitlePdp}>
                    <h1 className={style.titlePdp}>Política de Privacidade</h1>
                </div>

                <div className={style.cardPdp}>
                    <div className={style.tudoPdp}>
                        <p className={style.textoPdp}>
                            A Kailow valoriza sua privacidade e coleta apenas informações pessoais necessárias
                            para fornecer serviços, sempre com seu conhecimento e consentimento. Os dados são armazenados
                            pelo tempo necessário e protegidos contra acessos não autorizados. Não compartilhamos suas
                            informações com terceiros, exceto quando exigido por lei.
                            Nosso site utiliza Google AdSense, que emprega cookies para exibir anúncios relevantes e rastrear
                            acessos provenientes de parceiros, sem identificar usuários individualmente. Você pode recusar o
                            fornecimento de dados, mas isso pode limitar alguns serviços.
                            Ao usar o site, você concorda em não realizar atividades ilegais, difundir conteúdo ofensivo ou
                            danificar nossos sistemas. Em caso de dúvidas, entre em contato conosco. A desativação de cookies
                            pode afetar sua experiência no site. </p>
                    </div>

                </div>
                <div className={style.divTitlePdp}>
                    <h1 className={style.titlePdp} style={{ marginTop: "55px" }}>Termos de uso</h1>
                </div>

                <div className={style.cardPdp}>
                    <div className={style.tudoPdp}>
                        <p className={style.textoPdp}>
                            Ao utilizar o site Kailow, você concorda automaticamente com os seguintes termos e condições:

                            O acesso e uso deste site estão sujeitos à aceitação integral destes termos. Todo o conteúdo disponível, 
                            incluindo textos, imagens e softwares, está protegido por leis de direitos autorais e propriedade intelectual.
                             Você tem permissão para visualizar e fazer download temporário dos materiais apenas para uso pessoal e não
                              comercial, sendo expressamente proibida qualquer modificação, cópia, redistribuição ou uso comercial sem 
                              autorização prévia.
                            É vedado qualquer tentativa de engenharia reversa ou descompilação dos sistemas do site, bem como a remoção de
                             identificações de direitos autorais. A Kailow não oferece garantias sobre a precisão ou atualidade dos materiais
                              publicados, que são disponibilizados "no estado em que se encontram". A empresa não se responsabiliza por eventuais 
                              danos decorrentes do uso ou incapacidade de uso do site, incluindo perda de dados ou lucros.
                            O site pode conter links para páginas externas, cujo conteúdo e políticas não são de responsabilidade da Kailow. Estes 
                            termos podem ser modificados a qualquer momento, sem aviso prévio, sendo que o uso continuado do site após alterações
                             constitui aceitação das novas condições. Qualquer questão relacionada a estes termos será regida pelas leis da jurisdição 
                             da Kailow.
                            Ao permanecer no site, você confirma que leu, compreendeu e aceitou integralmente estes termos de uso. Caso não concorde 
                            com qualquer disposição aqui apresentada, recomendamos que interrompa imediatamente o uso deste website.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}