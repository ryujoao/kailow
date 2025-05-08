import style from "../style/footer.module.css"

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
                        <h4>Se Inscreva!</h4>
                        <div className={style.formSub}>
                            <form>
                                <input type="email" placeholder="Digite o seu e-mail" required />
                                    <button>Inscrever-se</button>
                            </form>
                        </div>

                        <div className={style.mediasSocias}>
                            <a href="#"> <i className="fa fa-facebook"></i> </a>
                            <a href="#"> <i className="fa fa-instagram"></i> </a>
                            <a href="#"> <i className="fa fa-twitter"></i> </a>
                            <a href="#"> <i className="fa fa-linkedin"></i> </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}