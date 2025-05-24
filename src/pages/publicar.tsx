import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/publicar.module.css"

export default function Publicar() {

    return (
        <>
            <div className={style.containerPublicar}>
                <Nav />
                <div className={style.bodyPublicar}>
                    <h1 className={style.tituloPublicar}>Publicar nova vaga</h1>

                    <div className={style.cardPublicarTrabalho}>
                        <div className={style.formPublicar}>
                            <form action="/publicarTrabalho" method="POST" encType="multipart/form-data">
                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="titulo">Título</label>
                                    <input className={style.publicarInput} type="text" id="titulo" name="titulo" placeholder="Digite o título da publicação" required />
                                </div>

                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="descricao">Legenda</label>
                                    <textarea className={style.publicarInput} id="descricao" name="descricao" rows={8} placeholder="Digite sua legenda" required ></textarea>
                                </div>

                                {/* <div className={style.selectLabel}>
                            <label className={style.publicarLabel} htmlFor="categoria">Categoria:</label>
                            <select className={style.publicarInput} id="categoria" name="categoria" required>
                                <option value="">Selecione uma categoria</option>
                                <option value="design">Design</option>
                                <option value="programacao">Programação</option>
                                <option value="escrita">Escrita</option>
                                <option value="marketing">Marketing</option>
                            </select>
                        </div> */}

                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="arquivo">Anexar imagem</label>
                                    <input className={style.publicarInput} type="file" id="arquivo" name="arquivo" accept=".png, .jpg, .jpeg" />
                                </div>

                                <div className={style.buttonPublicar}>
                                    <button className={style.btnPublicar} type="submit">Publicar</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <Footer />
            </div>

        </>

    )

}
