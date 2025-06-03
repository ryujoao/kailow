import { useForm } from "react-hook-form";
import { Footer } from "../components/footer";
import Nav from "../components/navbar"
import style from "../style/publicar.module.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

type Publicacao = {
    id: number,
    // titulo: string,
    legenda: string,
    anexar: FileList | null
}

export default function Publicar() {

    const [user, setUser] = useState<Publicacao>()
    // const [mensagem, setMensagem] = useState("")
    const navigate = useNavigate();
    const token = localStorage.getItem("token") || "";
    const notifySuccess = () => toast.success("Publicado com sucesso!");

async function handlePublicar(data: Publicacao) {
    const formData = new FormData();
    formData.append("legenda", data.legenda);
    if (data.anexar && data.anexar[0]) {
        formData.append("anexar", data.anexar[0]);
    }

    const response = await fetch("http://localhost:3000/publicar", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData,
    });

    if (response.ok) {
        notifySuccess();
        setTimeout(() => navigate("/perfil"), 3000);
    } else {
        console.error("Erro ao publicar");
    }
}


    const { register, handleSubmit } = useForm<Publicacao>({
        values: user
    })

    useEffect(() => {
        const user: Publicacao = jwtDecode(token);
        findUserById(user.id, token)
        console.log(user)
    }, [])

    async function findUserById(id: number, token: any) {
        const response = await fetch("http://localhost:3000/perfil/" + id, {
            headers:
                { "Authorization": `Bearer ${token}` }
        })

        const data: Publicacao = await response.json();
        setUser(data)
    }



    //     console.log(data)

    //     try {
    //         const formData = new FormData();
    //         // formData.append("titulo", data.titulo);
    //         formData.append("legenda", data.legenda);

    //         if (data.anexar && data.anexar[0]) {
    //             formData.append("anexar", data.anexar[0]);
    //         }

    //         const response = await fetch("http://localhost:3000/publicar", {
    //             method: "POST",
    //             body: formData,
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`, // se tiver autenticação JWT
    //             },
    //         });

    //         if (response.ok) {
    //             notifySuccess();
    //             console.log("Publicado com sucesso!");
    //             setTimeout(() => navigate("/perfil"), 4000);
    //         } else {

    //             const res = await response.json()
    //             console.error("Erro ao publicar:", response.statusText);
    //             setMensagem(res.error)
    //         }
    //     } catch (error: any) {
    //         console.error("Erro na requisição:", error);
    //         setMensagem(error.message)
    //     }
    // }

    return (
        <>
            <div className={style.containerPublicar}>
                <Nav />
                <div className={style.bodyPublicar}>
                    <h1 className={style.tituloPublicar}>Publicar nova vaga</h1>

                    <div className={style.cardPublicarTrabalho}>
                        <div className={style.formPublicar}>
                            <form onSubmit={handleSubmit(handlePublicar)} action="/publicarTrabalho" method="POST" encType="multipart/form-data">
                                {/* <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="titulo">Título</label>
                                    <input className={style.publicarInput} type="text" id="titulo" placeholder="Digite o título da publicação" required {...register("titulo")} />
                                </div> */}
                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="arquivo">Anexar imagem</label>
                                    <input className={style.publicarInput} type="file" max={1} id="arquivo" accept=".png, .jpg, .jpeg" {...register("anexar")} required />
                                </div>
                                <div className={style.selectLabel}>
                                    <label className={style.publicarLabel} htmlFor="descricao">Legenda</label>
                                    <textarea className={style.publicarInput} id="descricao" rows={8} placeholder="Digite sua legenda" required {...register("legenda")}></textarea>
                                </div>

                                {/* <div style={{ color: "red" }}>{mensagem}</div> */}

                                <div className={style.buttonPublicar}>
                                    <button className={style.btnPublicar} type="submit" >Publicar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />

                </div>
                <Footer />
            </div>

        </>

    )

}
