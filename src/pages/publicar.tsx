import { useForm } from "react-hook-form";
import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/publicar.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type publicarType = {
    titulo: string,
    legenda: string,
    anexar: FileList | null
}

export default function Publicar() {

    const { register, handleSubmit } = useForm<publicarType>()
    const [mensagem, setMensagem] = useState("")
    const navigate = useNavigate();

    async function handlePublicar(data: publicarType) {

        console.log(data)

        try {
            const formData = new FormData();
            formData.append("titulo", data.titulo);
            formData.append("legenda", data.legenda);

            if (data.anexar && data.anexar[0]) {
                formData.append("anexar", data.anexar[0]);
            }

            const response = await fetch("http://localhost:3000/publicar", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("Publicado com sucesso!");
                navigate("/perfil")
            } else {

                const res = await response.json()
                console.error("Erro ao publicar:", response.statusText);
                setMensagem(res.error)
            }
        } catch (error: any) {
            console.error("Erro na requisição:", error);
            setMensagem(error.message)
        }
    }

    return (
        <>
            <div className={style.containerPublicar}>
                <Nav />
                <div className={style.bodyPublicar}>
                    <h1 className={style.tituloPublicar}>Publicar nova vaga</h1>

                    <div className={style.cardPublicarTrabalho}>
                        <div className={style.formPublicar}>
                            <form onSubmit={handleSubmit(handlePublicar)} action="/publicarTrabalho" method="POST" encType="multipart/form-data">
                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="titulo">Título</label>
                                    <input className={style.publicarInput} type="text" id="titulo" placeholder="Digite o título da publicação" required {...register("titulo")} />
                                </div>

                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="descricao">Legenda</label>
                                    <textarea className={style.publicarInput} id="descricao" name="descricao" rows={8} placeholder="Digite sua legenda" required ></textarea>
                                </div>

                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="arquivo">Anexar imagem</label>
                                    <input className={style.publicarInput} type="file" max={1} id="arquivo" accept=".png, .jpg, .jpeg" {...register("anexar")} required />
                                </div>
                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="descricao">Legenda</label>
                                    <textarea className={style.publicarInput} id="descricao" rows={8} placeholder="Digite sua legenda" required {...register("legenda")}></textarea>
                                </div>

                                <div style={{ color: "red" }}>{mensagem}</div>

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
