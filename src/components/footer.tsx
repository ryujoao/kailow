import style from "../style/footer.module.css"
import * as Icon from 'react-bootstrap-icons';

export function Footer() {
    return (
        // <footer className={style.footer}>
        //     <div className={style.containerFooter}>
        //         <p className={style.textoFooter}>Kailow &copy; 2023</p>
        //         <p className={style.textoFooter}>Todos os direitos reservados</p>
        //     </div>
        // </footer>
        <footer>
            <div className={style.primeiraLinhaFooter}>
                <p><div className={style.logoFooter}>
                    <img src="../img/logo.png" alt="Logo" />
                    <h1 id="kailow-nav-nome">Kailow</h1>
                </div> </p>
            </div>
            <div className={style.containerFooter}>
                <div className={style.rowFooter}>
                    <div className={style.footerCol}>
                        <h4>AJUDA</h4>
                        <ul>

                            <li><a href="#">FAQ</a></li>
                            <li><a href="">Segurança</a></li>
                            <li><a href="">Como Receber Pagamentos</a></li>
                            <li><a href="">Problemas com Clientes</a></li>
                            <li><a href="">Central de Ajuda</a></li>

                        </ul>
                    </div>
                    <div className={style.footerCol}>
                        <h4>FREELANCER</h4>
                        <ul>

                            <li><a href="#">Trabalhos</a></li>
                            <li><a href="#">Trabalhe Conosco</a></li>
                            <li><a href="#">Montar Seu Portfólio</a></li>
                            <li><a href="#">Trabalhos Disponíveis</a></li>
                            <li><a href="#">Formas de Pagamento</a></li>

                        </ul>
                    </div>
                    <div className={style.footerCol}>
                        <h4>SOBRE</h4>
                        <ul>
                            <li><a href="#">Termos</a></li>
                            <li><a href="#">Privacidade</a></li>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Depoimentos</a></li>
                        </ul>
                    </div>
                    <div className={style.footerCol}>
                        <div className={style.formSub}>
                            <h4 className={style.feedback}>Deixe seu feedback!</h4>
                            <form>
                                <input type="email" placeholder="Digite aqui" required className={style.feedbackInput} />
                                <button className={style.feedbackBtn}>Enviar</button>
                            </form>
                            <div className={style.mediasSocias}>
                                <a href="https://www.facebook.com/?locale=pt_BR" target="_blank"> <Icon.Facebook /> </a>
                                <a href="https://www.instagram.com/" target="_blank"> <Icon.Instagram style={{ color: "#FF1493" }} /> </a>
                                <a href="https://x.com/?lang=pt" target="_blank"> <Icon.TwitterX style={{ color: "#000" }} /> </a>
                                <a href="https://www.messenger.com/?locale=pt_BR" target="_blank"> <Icon.Messenger style={{ color: "blue" }} /> </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}