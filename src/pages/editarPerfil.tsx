import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import Nav from "../components/navbar";
import style from "../style/editarPerfil.module.css";
import * as Icon from "react-bootstrap-icons";
import { jwtDecode } from "jwt-decode";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

type DadosPerfil = {
    id: number
    description: string;
    nome?: string;
    email: string;
};

export default function EditarPerfil() {

    const [user, setUser] = useState<DadosPerfil>()
    const navigate = useNavigate();
    const token = localStorage.getItem("token") || "";

    const [fotoPerfil, setFotoPerfil] = useState<string | null>(
        localStorage.getItem("fotoPerfil")
    );
    async function handleAlterarPerfil(data: DadosPerfil) {
        const response = await fetch("http://localhost:3000/perfil", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },

            body: JSON.stringify(data),
        });
        navigate("/perfil")
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

    // function handleDescricaoChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    //     const novo = { ...dadosPerfil, descricao: e.target.value };
    //     setDadosPerfil(novo);
    //     localStorage.setItem("dadosPerfil", JSON.stringify(novo));
    // }

    // function handleCurriculoChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     const file = e.target.files?.[0];
    //     if (!file) return;
    //     const url = URL.createObjectURL(file);
    //     const novo = { ...dadosPerfil, curriculo: url, curriculoNome: file.name };
    //     setDadosPerfil(novo);
    //     localStorage.setItem("dadosPerfil", JSON.stringify(novo));
    // }


    //   const { register, handleSubmit, reset } = useForm<editarPerfil>()
    //     // const userId = localStorage.getItem("userId");
    //     const [mensagem, setMensagem] = useState("")
    //     const fileInputRef = useRef<HTMLInputElement>(null);
    //     const [userImg, setUserImg] = useState<string | null>(null);
    //     const navigate = useNavigate()

    //     useEffect(() => {
    //         const token = localStorage.getItem("token");
    //         const userId = localStorage.getItem("userId")

    //         if (token) {
    //             fetch(`http://localhost:3000/editar${userId}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             })
    //                 .then(res => res.json())
    //                 .then(userData => {
    //                     reset({
    //                         id: userData.id,
    //                         email: userData.email,
    //                         nome: userData.nome,
    //                         descricao: userData.descricao || "",
    //                         imgUrl: null,
    //                         curriculo: null
    //                     });

    //                     if (userData.imgUrl) {
    //                         setUserImg(`http://localhost:3000/uploads/${userData.imgUrl}`);
    //                     }
    //                 });
    //         }
    //     }, [reset]);

    //     async function handleEditar(data: editarPerfil) {

    //         console.log(data)

    //         try {
    //             const formData = new FormData();
    //             formData.append("id", String(data.id)); // id do usuário logado
    //             formData.append("descricao", data.descricao);
    //             console.log(data.id)

    //             // imgUrl e curriculo são FileList | null
    //             if (data.imgUrl && data.imgUrl[0]) {
    //                 formData.append("imgUrl", data.imgUrl[0]);
    //             }
    //             if (data.curriculo && data.curriculo[0]) {
    //                 formData.append("curriculo", data.curriculo[0]);
    //             }

    //             const response = await fetch("http://localhost:3000/editar", {
    //                 method: "POST",
    //                 body: formData,
    //             });

    //             if (response.ok) {
    //                 console.log("Dados salvos com sucesso!");
    //                 navigate("/perfil")
    //             } else {

    //                 const res = await response.json()
    //                 console.error("Erro ao salvar dados:", response.statusText);
    //                 setMensagem(res.error)
    //             }
    //         } catch (error: any) {
    //             console.error("Erro na requisição:", error);
    //             setMensagem(error.message)
    //         }
    //     }

    //     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //         if (e.target.files && e.target.files[0]) {
    //             setUserImg(URL.createObjectURL(e.target.files[0]));
    //         }
    //     };

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

                                <label className={style.labelEditarPerfil} htmlFor="descricao"> Adicione sua descrição </label>
                                <textarea className={style.inputEditarDescricao} id="descricao" rows={8} placeholder="Digite sua descrição" {...register("description")} />

                                {/* <label className={style.labelEditarPerfil} htmlFor="curriculo">
                                    Currículo (PDF):
                                </label> */}
                                {/* <input
                                    className={style.inputEditarPerfil}
                                    type="file"
                                    id="curriculo"
                                    name="curriculo"
                                    accept=".pdf"
                                    onChange={handleCurriculoChange}
                                />
                                {dadosPerfil.curriculoNome && (
                                    <span style={{ color: "#fff" }}>
                                        Arquivo selecionado: {dadosPerfil.curriculoNome}
                                    </span>
                                )} */}
                                <div className={style.botaoSalvar}>
                                    <button className={style.salvar} type="submit">Salvar Alterações</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}