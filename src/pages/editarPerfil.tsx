import { useEffect, useRef, useState } from 'react';
import Nav from '../components/navbar';
import style from '../style/editarPerfil.module.css';
import * as Icon from 'react-bootstrap-icons'
// import { Link } from 'react-router-dom';

export type EditarPerfil = {
    id: number,
    descricao: string,
    // imgUrl: ImageSourcePropType
    // interesse: string
}

export default function EditarPerfil() {

    const [editarPerfil, setEditarPerfil] = useState<EditarPerfil[]>()

    const fileInputRef = useRef<HTMLInputElement>(null);

    function fetchEditarPerfil() {
        fetch("http://localhost:3000/perfil")
            .then((response) => response.json())
            .then(data => { console.log("Dados recebidos:", data); setEditarPerfil(data) })
    }

    useEffect(() => {
        fetchEditarPerfil()
    }, [])



    return (
        <>
            <div className={style.bodyEditarPerfil}>
                <Nav />
                <div className={style.containerEditarPerfil}>
                    <h1 className={style.textSeuPerfil}>Seu perfil</h1>

                    {/* {
                        editarPerfil?.map((item) => ( */}
                            <div className={style.cardEditarPerfil}>
                                <div className={style.userEditarPerfil}>
                                    <img src="../public/img/userImg.jpg" alt="" />
                                    {/* imagem do usuario */}

                                    <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                        <h3 style={{ color: "#fff" }}>Antonio Kobayashi</h3>
                                        {/* nome usuario */}

                                        <Icon.Camera style={{ cursor: "pointer", color: "#fff", width: "25px", height: "25px" }} onClick={() => fileInputRef.current?.click()} />
                                        <input type="file" accept="image/*" ref={fileInputRef} style={{ display: "none" }} />
                                    </section>
                                </div>

                                <div className={style.formEditarPerfil}>
                                    <form>
                                        <label className={style.labelEditarPerfil} htmlFor='nome'>Nome:</label>
                                        <input className={style.inputEditarPerfil} id='nome' type="text" value="Antonio Kobayashi" required />

                                        <label className={style.labelEditarPerfil} htmlFor='email'>E-mail:</label>
                                        <input className={style.inputEditarPerfil} id='email' type="text" value="antonio@gmail.com" required />


                                        <label className={style.labelEditarPerfil} htmlFor='descricao'>Adicione sua descrição</label>
                                        <textarea className={style.inputEditarDescricao} id='descricao' rows={4} placeholder="Digite sua descrição" ></textarea>
{/*                                         
                                        <label className={style.labelEditarPerfil} htmlFor='descricao'>Adicione sua descrição</label>
                                        <textarea className={style.inputEditarDescricao} id='descricao' rows={8} placeholder="Digite sua descrição" >{item.descricao}</textarea> */}

                                        {/* <label className={style.labelEditarPerfil} htmlFor='senha'>Senha atual</label>
                                        <input className={style.inputEditarPerfil} id='senha' type="password" placeholder="Digite sua senha" required /> */}

                                        {/* <label className={style.labelEditarPerfil} htmlFor='novaSenha'>Nova senha</label>
                                        <input className={style.inputEditarPerfil} id='novaSenha' type="password" placeholder="Digite sua nova senha" required /> */}

                                        <label className={style.labelEditarPerfil} htmlFor="curriculo">Currículo (PDF):</label>
                                        <input className={style.inputEditarPerfil} type="file" id="curriculo" name="curriculo" accept=".pdf" />

                                        <div className={style.interesseVagas}>
                                            <div className={style.checkboxItems}>
                                                <label className={style.labelEditarPerfil} htmlFor="vaga1">Estágio</label>
                                                <input type="checkbox" id="vaga1" name="vaga1" className={style.interesseCheckbox} />
                                            </div>
                                            <div className={style.checkboxItems}>
                                                <label className={style.labelEditarPerfil} htmlFor="vaga2">Aprendiz</label>
                                                <input type="checkbox" id="vaga2" name="vaga2" className={style.interesseCheckbox} />
                                            </div>
                                            <div className={style.checkboxItems}>
                                                <label className={style.labelEditarPerfil} htmlFor="vaga3">Freelancer</label>
                                                <input type="checkbox" id="vaga3" name="vaga3" className={style.interesseCheckbox} />
                                            </div>
                                            <div className={style.checkboxItems}>
                                                <label className={style.labelEditarPerfil} htmlFor="vaga4">CLT</label>
                                                <input type="checkbox" id="vaga4" name="vaga4" className={style.interesseCheckbox} />
                                            </div>
                                        </div>

                                        <div className={style.buttonPerfil}>
                                        <button type="submit">Salvar Alterações</button>
                                        </div>
                                    </form>
                                </div >
                            </div>
                        {/* ))
                    } */}


                </div >

            </div >
        </>
    )
}