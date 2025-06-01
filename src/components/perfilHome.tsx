
import { useState } from "react";
import style from "../style/perfilHome.module.css"
import * as Icon from "react-bootstrap-icons";

export default function PerfilHome() {

    const currentUserId = "usuario123";

    const [comentarios, setComentarios] = useState<{
        [key: number]: { texto: string; userId: string }[];
    }>({
        0: [],
        1: [],
        2: [],
    });

    const [novoComentario, setNovoComentario] = useState<{
        [key: number]: string;
    }>({
        0: "",
        1: "",
        2: "",
    });

    const [comentarioEditando, setComentarioEditando] = useState<{
        postId: number | null;
        comentarioIndex: number | null;
        texto: string;
    }>({ postId: null, comentarioIndex: null, texto: "" });

    function adicionarComentario(postId: number) {
        if (novoComentario[postId]?.trim() === "") return;
        setComentarios((prev) => ({
            ...prev,
            [postId]: [
                ...(prev[postId] || []),
                { texto: novoComentario[postId], userId: currentUserId },
            ],
        }));
        setNovoComentario((prev) => ({
            ...prev,
            [postId]: "",
        }));
    }

    function excluirComentario(postId: number, comentarioIndex: number) {
        setComentarios((prev) => ({
            ...prev,
            [postId]: prev[postId].filter((_, index) => index !== comentarioIndex),
        }));
    }

    function iniciarEdicaoComentario(postId: number, comentarioIndex: number) {
        const comentario = comentarios[postId][comentarioIndex];
        setComentarioEditando({ postId, comentarioIndex, texto: comentario.texto });
    }

    function salvarEdicaoComentario() {
        const { postId, comentarioIndex, texto } = comentarioEditando;
        if (postId === null || comentarioIndex === null || texto.trim() === "")
            return;
        setComentarios((prev) => ({
            ...prev,
            [postId]: prev[postId].map((comentario, index) =>
                index === comentarioIndex ? { ...comentario, texto } : comentario
            ),
        }));
        setComentarioEditando({ postId: null, comentarioIndex: null, texto: "" });
    }

    return (
        <>
            <div className={style.perfilContainer}>
                <div className={style.mainContainer}>
                    <div className={style.feedSection}>


                        <div className={style.postCard}>
                            <section style={{ paddingLeft: "5dvh", display: "flex", flexDirection: "row", alignItems: "center" }}>

                                <img src="../public/img/passearComCachorro.jpg" alt="" className={style.iconPerfil} />
                                <section>
                                    <h3 className={style.postUser}>Passeios com pets MAX</h3>
                                    <h3 className={style.postHoras}>Há 5 horas</h3>
                                </section>
                            </section>

                            <div className={style.postBody}>
                                {" "}
                                <img
                                    className={style.fotoFeed}
                                    src="../public/img/CACHORRO.png"
                                    alt=""
                                />
                            </div>

                            <section style={{ paddingLeft: "5dvh" }}>
                                <h3 className={style.postDescricao}>
                                    ✅ Exercício + ar livre <br />✅ Flexibilidade de horário <br /> ✅
                                    Bonificação por desempenho <br />✅ Treinamento incluso <br />💬 Ama
                                    animais? Venha trabalhar conosco! 📩 #Vagas #PetLove
                                    #TrabalheComAmor
                                </h3>
                            </section>

                            <div className={style.comentarios}>
                                
                                <section>
                                <h4>Comentários:</h4>
                                </section>

                                <ul className={style.comentariosLista}>
                                    {comentarios[0]?.map((comentario, index) => (
                                        <li key={index} className={style.comentarioItem}>
                                            {comentarioEditando.postId === 0 &&
                                                comentarioEditando.comentarioIndex === index ? (
                                                <div className={style.comentarioLinha}>
                                                    <input
                                                        type="text"
                                                        value={comentarioEditando.texto}
                                                        onChange={(e) =>
                                                            setComentarioEditando((prev) => ({
                                                                ...prev,
                                                                texto: e.target.value,
                                                            }))
                                                        }
                                                        className={style.comentarioEditInput}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") salvarEdicaoComentario();
                                                        }}
                                                    />
                                                    <div className={style.comentarioMeta}>
                                                        <span
                                                            className={style.comentarioAcao}
                                                            onClick={salvarEdicaoComentario}
                                                        >
                                                            Salvar
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className={style.comentarioLinha}>
                                                    <span className={style.comentarioTexto}>
                                                        {comentario.texto}
                                                    </span>
                                                    <div className={style.comentarioMeta}>
                                                        <span className={style.comentarioTempo}></span>
                                                        {comentario.userId === currentUserId && (
                                                            <>
                                                                <span
                                                                    className={style.comentarioAcao}
                                                                    onClick={() =>
                                                                        iniciarEdicaoComentario(0, index)
                                                                    }
                                                                >
                                                                    <Icon.Pencil size={16} />
                                                                </span>
                                                                <span
                                                                    className={style.comentarioAcao}
                                                                    onClick={() =>
                                                                        excluirComentario(0, index)
                                                                    }
                                                                >
                                                                    Excluir
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div className={style.comentarioInput}>
                                    <input
                                        type="text"
                                        placeholder="Escreva um comentário..."
                                        value={novoComentario[0] || ""}
                                        onChange={(e) =>
                                            setNovoComentario((prev) => ({
                                                ...prev,
                                                0: e.target.value,
                                            }))
                                        }
                                        className={style.comentarioTexto}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") adicionarComentario(0);
                                        }}
                                    />
                                    <button
                                        onClick={() => adicionarComentario(0)}
                                        className={style.comentarioBotao}
                                    >
                                        Comentar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={style.postCard}>
                            <section style={{ paddingLeft: "5dvh", display: "flex", flexDirection: "row", alignItems: "center" }}>

                                <img src="../public/img/supermercado.jpg" alt="" className={style.iconPerfil} />

                                <section>
                                    <h3 className={style.postUser}>Restaurante Seringueira</h3>
                                    <h3 className={style.postHoras}>Há 2 dias</h3>
                                </section>
                            </section>

                            <div className={style.postBody}>
                                {" "}
                                <img
                                    className={style.fotoFeed}
                                    src="../public/img/RESTAURANTE.png"
                                    alt=""
                                />
                            </div>

                            <section style={{ paddingLeft: "5dvh" }}>
                                <h3 className={style.postDescricao}>
                                    ✅ Treinamento incluso <br />✅ Gorjetas + benefícios <br /> ✅
                                    Flexibilidade de horários <br /> ✅ Oportunidade de crescimento <br /> 💬
                                    Gosta de atendimento? Venha fazer parte do nosso time! 📩
                                    #Vagas #Restaurante #TrabalheConosco
                                </h3>
                            </section>

                            <div className={style.comentarios}>
                                
                                <section>
                                <h4>Comentários:</h4>
                                </section>
                                
                                <ul className={style.comentariosLista}>
                                    {comentarios[0]?.map((comentario, index) => (
                                        <li key={index} className={style.comentarioItem}>
                                            {comentarioEditando.postId === 0 &&
                                                comentarioEditando.comentarioIndex === index ? (
                                                <div className={style.comentarioLinha}>
                                                    <input
                                                        type="text"
                                                        value={comentarioEditando.texto}
                                                        onChange={(e) =>
                                                            setComentarioEditando((prev) => ({
                                                                ...prev,
                                                                texto: e.target.value,
                                                            }))
                                                        }
                                                        className={style.comentarioEditInput}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") salvarEdicaoComentario();
                                                        }}
                                                    />
                                                    <div className={style.comentarioMeta}>
                                                        <span
                                                            className={style.comentarioAcao}
                                                            onClick={salvarEdicaoComentario}
                                                        >
                                                            Salvar
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className={style.comentarioLinha}>
                                                    <span className={style.comentarioTexto}>
                                                        {comentario.texto}
                                                    </span>
                                                    <div className={style.comentarioMeta}>
                                                        <span className={style.comentarioTempo}></span>
                                                        {comentario.userId === currentUserId && (
                                                            <>
                                                                <span
                                                                    className={style.comentarioAcao}
                                                                    onClick={() =>
                                                                        iniciarEdicaoComentario(0, index)
                                                                    }
                                                                >
                                                                    <Icon.Pencil size={16} />
                                                                </span>
                                                                <span
                                                                    className={style.comentarioAcao}
                                                                    onClick={() =>
                                                                        excluirComentario(0, index)
                                                                    }
                                                                >
                                                                    Excluir
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div className={style.comentarioInput}>
                                    <input
                                        type="text"
                                        placeholder="Escreva um comentário..."
                                        value={novoComentario[0] || ""}
                                        onChange={(e) =>
                                            setNovoComentario((prev) => ({
                                                ...prev,
                                                0: e.target.value,
                                            }))
                                        }
                                        className={style.comentarioTexto}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") adicionarComentario(0);
                                        }}
                                    />
                                    <button
                                        onClick={() => adicionarComentario(0)}
                                        className={style.comentarioBotao}
                                    >
                                        Comentar
                                    </button>
                                </div>
                            </div>

                        </div>


                        <div className={style.postCard}>
                            <section style={{ paddingLeft: "5dvh", display: "flex", flexDirection: "row", alignItems: "center" }}>

                                <img src="../public/img/jeferson.png" alt="" className={style.iconPerfil} />

                                <section>
                                    <h3 className={style.postUser}>Jerfeson Oliveira</h3>
                                    <h3 className={style.postHoras}>Há 3 dias</h3>
                                </section>
                            </section>

                            <div className={style.postBody}> <img className={style.fotoFeed} src="../public/img/jeferson.png" alt="" /></div>


                            <section style={{ paddingLeft: "5dvh" }}>
                                <h3 className={style.postDescricao}>Primeiro dia de trabalho no Supermercado Kipago, muito feliz e realizado👌😁😊
                                    <br />
                                    <br />
                                    #feliz #freelance #kailow #realizado #freelancer #kipago
                                </h3>
                            </section>
                            <div className={style.comentarios}>
                                
                                <section>
                                <h4>Comentários:</h4>
                                </section>
                                
                                <ul className={style.comentariosLista}>
                                    {comentarios[0]?.map((comentario, index) => (
                                        <li key={index} className={style.comentarioItem}>
                                            {comentarioEditando.postId === 0 &&
                                                comentarioEditando.comentarioIndex === index ? (
                                                <div className={style.comentarioLinha}>
                                                    <input
                                                        type="text"
                                                        value={comentarioEditando.texto}
                                                        onChange={(e) =>
                                                            setComentarioEditando((prev) => ({
                                                                ...prev,
                                                                texto: e.target.value,
                                                            }))
                                                        }
                                                        className={style.comentarioEditInput}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") salvarEdicaoComentario();
                                                        }}
                                                    />
                                                    <div className={style.comentarioMeta}>
                                                        <span
                                                            className={style.comentarioAcao}
                                                            onClick={salvarEdicaoComentario}
                                                        >
                                                            Salvar
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className={style.comentarioLinha}>
                                                    <span className={style.comentarioTexto}>
                                                        {comentario.texto}
                                                    </span>
                                                    <div className={style.comentarioMeta}>
                                                        <span className={style.comentarioTempo}></span>
                                                        {comentario.userId === currentUserId && (
                                                            <>
                                                                <span
                                                                    className={style.comentarioAcao}
                                                                    onClick={() =>
                                                                        iniciarEdicaoComentario(0, index)
                                                                    }
                                                                >
                                                                    <Icon.Pencil size={16} />
                                                                </span>
                                                                <span
                                                                    className={style.comentarioAcao}
                                                                    onClick={() =>
                                                                        excluirComentario(0, index)
                                                                    }
                                                                >
                                                                    Excluir
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div className={style.comentarioInput}>
                                    <input
                                        type="text"
                                        placeholder="Escreva um comentário..."
                                        value={novoComentario[0] || ""}
                                        onChange={(e) =>
                                            setNovoComentario((prev) => ({
                                                ...prev,
                                                0: e.target.value,
                                            }))
                                        }
                                        className={style.comentarioTexto}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") adicionarComentario(0);
                                        }}
                                    />
                                    <button
                                        onClick={() => adicionarComentario(0)}
                                        className={style.comentarioBotao}
                                    >
                                        Comentar
                                    </button>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}