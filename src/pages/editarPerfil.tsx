import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import Nav from "../components/navbar";
import style from "../style/editarPerfil.module.css";
import * as Icon from "react-bootstrap-icons";
import { jwtDecode } from "jwt-decode";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export type DadosPerfil = {
    id: number
    description: string;
    nome: string;
    email: string;
    verificado?: boolean;
};

export default function EditarPerfil() {

    const [user, setUser] = useState<DadosPerfil>()
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState("")
    const token = localStorage.getItem("token") || "";
    const notifySuccess = () => toast.success("Dados atualizados");


    async function handleAlterarPerfil(data: DadosPerfil) {
        try {
            const response = await fetch("http://localhost:3000/perfil", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                body: JSON.stringify(data),
            });

            if (response.ok) {
                notifySuccess();
                setTimeout(() => navigate("/perfil"), 2000);
            }
            else {
                const res = await response.json();
                console.error("Erro ao atualizar perfil:", response.statusText);
                setMensagem(res.error || "Erro ao atualizar perfil");
            }

        } catch (error: any) {
            console.error("Erro na requisição:", error);
            setMensagem(error.message)
        }
    }

    const { register, handleSubmit } = useForm<DadosPerfil>({
        values: user
    })

    useEffect(() => {
        const user: DadosPerfil = jwtDecode(token);
        findUserById(user.id, token)
        console.log(user)
    }, [])

    async function findUserById(id: number, token: any) {
        const response = await fetch("http://localhost:3000/perfil/" + id, {
            headers:
                { "Authorization": `Bearer ${token}` }
        })

        const data: DadosPerfil = await response.json();
        setUser(data)
    }


    const [fotoPerfil, setFotoPerfil] = useState<string | null>(
        localStorage.getItem("fotoPerfil")
    );

    function handleFotoPerfilChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = reader.result as string;
            setFotoPerfil(img);
            localStorage.setItem("fotoPerfil", img);
        };
        reader.readAsDataURL(file);
    }

    return (
        <>
            <div className={style.bodyEditarPerfil}>
                <Nav />
                <div className={style.containerEditarPerfil}>
                    <h1 className={style.textSeuPerfil}>Seu perfil</h1>
                    <div className={style.cardEditarPerfil}>
                        <div className={style.userEditarPerfil}>
                            <label
                                htmlFor="fotoPerfilInput"
                                style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}>
                                {fotoPerfil ? (
                                    <img
                                        src={fotoPerfil}
                                        alt="Foto de perfil"
                                        style={{
                                            width: "15dvh",
                                            height: "15dvh",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            marginBottom: "15px",
                                        }} />
                                ) : (
                                    <Icon.PersonCircle
                                        style={{
                                            color: "#CDD5DB",
                                            width: "15dvh",
                                            height: "15dvh",
                                            marginBottom: "15px",
                                        }}
                                    />
                                )}
                                <section
                                    style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                                >
                                    <h3 style={{ color: "#fff", fontSize: "20px" }}>Editar foto</h3>
                                    <Icon.Camera
                                        style={{
                                            cursor: "pointer",
                                            color: "#fff",
                                            width: "25px",
                                            height: "25px",
                                        }}
                                    />
                                </section>
                                <input
                                    id="fotoPerfilInput"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleFotoPerfilChange}
                                />
                            </label>
                        </div>

                        <div className={style.formEditarPerfil}>
                            <form onSubmit={handleSubmit(handleAlterarPerfil)}>

                                <label className={style.labelEditarPerfil} htmlFor="nome"> Nome </label>
                                <input className={style.inputEditarPerfil} id="nome" type="text" {...register("nome")} />

                                <label className={style.labelEditarPerfil} htmlFor="email"> E-mail </label>
                                <input className={style.inputEditarPerfil} id="email" type="text" {...register("email")} />

                                <div className={style.mensagem}>{mensagem}</div>

                                <label className={style.labelEditarPerfil} htmlFor="descricao"> Adicione sua descrição </label>
                                <textarea className={style.inputEditarDescricao} id="descricao" rows={8} placeholder="Digite sua descrição" {...register("description")} />

                                <div className={style.botaoSalvar}>
                                    <button className={style.salvar} type="submit">Salvar Alterações</button>
                                </div>
                            </form>
                        </div>
                    </div>
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
                </div>
                <Footer />
            </div>
        </>
    );
}