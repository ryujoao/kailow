import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/publicar.module.css"

export default function Publicar() {

    return (
        <>
            <Nav />
            <div className={style.bodyPublicar}>
                <h1 className={style.publicarTitle}>Publicar nova vaga</h1>
                <div className={style.publicarContainer}>

                    <form className={style.publicarMain} action="/publicarTrabalho" method="POST" encType="multipart/form-data">
                       <section className={style.publicarSection}>
                        <div className={style.publicarItem}>
                            <label htmlFor="titulo">Titulo da publicação</label>
                            <input className={styles.publicarInput} type="text" id="titulo" name="titulo" placeholder="Digite o titulo da sua publicação" required/>
                        </div>
                        <div className={style.publicarItem}>
                            <label htmlFor="descricao">Descrição: </label>
                            <textarea className={style.publicarInput}  name="descricao" id="descricao" rows={3} placeholder="Descreva sua publicação" required></textarea>
                        </div>

                        <div className={style.publicarItem}>
                            <label htmlFor="categoria">Categoria:</label>
                            <select className={style.publicarInput} name="caegoria" id="categoria">
                                <option value="">Selecione uma opção</option>
                                <option value="design">Design</option>
                                <option value="programacao">programação</option>
                                <option value="escrita">Escrita</option>
                                <option value="marketing">Marketing</option>
                            </select>
                        </div>

                        <div className={style.publicarItem}>
                            <label htmlFor="arquivo">Anexar arquivo (Opcional)</label>
                            <input className={style.publicarInput} type="file" id="arquivo" name="arquivo" accept=".pdf, .doc, .docx, .png, .jpg, .jpeg"  />
                        </div>
                       </section>
                
                    </form>


                </div>

            </div>
            <Footer />

        </>

    )

}
