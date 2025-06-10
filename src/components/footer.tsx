import style from "../style/footer.module.css"
import * as Icon from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";


export function Footer() {

    const [form, setForm] = useState({
        feedback: '',
    });

    const notifySuccess = () => toast.success("Obrigado pelo seu feedback!");
    
    const limparCampos = () => {
        setForm({
            feedback: '',
        });
    };

    interface FeedbackForm {
        feedback: string;
    }

    interface FeedbackInputEvent extends React.ChangeEvent<HTMLInputElement> {}

    const handleChange = (e: FeedbackInputEvent) => {
        const { name, value } = e.target;
        setForm((prev: FeedbackForm) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        notifySuccess();
        limparCampos();

    };

  

    return (
        <>
            <footer>
                <div className={style.bodyFooter}>

                    <section>
                        <div className={style.primeiraLinhaFooter}>
                            <div className={style.logoFooter}>
                                <img src="../public/img/logo.png" alt="Logo" />
                                <h1 id="kailow-nav-nome" className={style.kailowFooter}>Kailow</h1>
                            </div>
                        </div>
                        <div className={style.containerFooter}>
                            <div className={style.rowFooter}>
                                <div className={style.footerCol}>
                                    <h4>AJUDA</h4>
                                    <ul>
                                        <li><a href="/sobre">FAQ</a></li>
                                        <li><a href="/configuracao">Segurança</a></li>
                                        <li><a href="/configuracao">Central de Ajuda</a></li>
                                    </ul>
                                </div>
                                <div className={style.footerCol}>
                                    <h4>FREELANCER</h4>
                                    <ul>

                                        <li><a href="/comunidades">Trabalhos</a></li>
                                        <li><a href="/comunidades">Trabalhe Conosco</a></li>
                                        <li><a href="/perfil">Montar Seu Portfólio</a></li>

                                    </ul>
                                </div>
                                <div className={style.footerCol}>
                                    <h4>SOBRE</h4>
                                    <ul>
                                        <li><a href="/privacidade">Privacidade</a></li>
                                        <li><a href="/sobre">Quem Somos</a></li>
                                        <li><a href="/home#feed">Depoimentos</a></li>
                                    </ul>
                                </div>
                                <div className={style.footerCol}>
                                    <div className={style.formSub}>
                                        <h4 className={style.feedback}>Deixe seu feedback!</h4>
                                        <form onSubmit={handleSubmit}>
                                            <input type="text" name="feedback" placeholder="Digite aqui" value={form.feedback} onChange={handleChange} required className={style.feedbackInput} />
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
                    </section>
                </div>
            </footer>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}
