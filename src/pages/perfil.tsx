import { useNavigate, useParams, Link } from "react-router-dom";
import Nav from "../components/navbar";
import style from "../style/perfil.module.css";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type DadosPerfil = {
  id: number
  nome: string
  description: string;
  // interesse: string[];
  // curriculo: string;
};

type Publicacao = {
  id: number;
  anexar: FileList | null;
  legenda: string;
  // criadoEm: string;
};

export default function Perfil() {
  const { id } = useParams();
  const token = localStorage.getItem("token") || "";
  const [user, setUser] = useState<DadosPerfil>()
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([]);
  const navigate = useNavigate();


  // Carrega os dados do editar perfil para o perfil
  const [dadosPerfil] = useState<DadosPerfil>(() => {
    const salvo = localStorage.getItem("dadosPerfil");
    return salvo
      ? JSON.parse(salvo)
      : { descricao: "" };
  });

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

  //pegar publicação
  const [Publicacao] = useState<Publicacao>(() => {
    const salvo = localStorage.getItem("publicacao");
    return salvo
      ? JSON.parse(salvo)
      : {
        legenda: "",
        anexar: "",
      };
  });

  useEffect(() => {
    const user: Publicacao = jwtDecode(token);
    findPublicacaoById(user.id, token)
    console.log(user)
  }, [])

  async function findPublicacaoById(id: number, token: any) {
    const response = await fetch(`http://localhost:3000/perfil/${id}/publicar`, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const data: Publicacao[] = await response.json();
    setPublicacoes(data);
  }

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

  //   useEffect(() => {
  //   if (!id) return; // Não faz a requisição se id não existir

  //   async function fetchPublicacoes() {
  //     try {
  //       const response = await fetch(`http://localhost:3000/perfil/${id}/publicar`, {
  //         headers: 
  //         { "Authorization": `Bearer ${token}` }
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setPublicacoes(data);
  //       } else {
  //         console.error("Erro ao buscar publicações");
  //       }
  //     } catch (error) {
  //       console.error("Erro na requisição:", error);
  //     }
  //   }

  //   fetchPublicacoes();
  // }, [id]);


  const [fotoPerfil] = useState<string | null>(
    localStorage.getItem("fotoPerfil")
  );

  function editar() {
    navigate("/editar");
  }

  // const [menuOpen, setMenuOpen] = useState<number | null>(null);

  // const [posts, setPosts] = useState([
  //   {
  //     id: 0,
  //     imagem: "",
  //     legenda: "Este é o conteúdo do primeiro post.",
  //     horas: "Há 11 horas",
  //   },
  //   {
  //     id: 1,
  //     imagem: "",
  //     legenda: "Este é o conteúdo do segundo post.",
  //     horas: "Há 5 horas",
  //   },
  //   {
  //     id: 2,
  //     imagem: "",
  //     legenda: "Este é o conteúdo do terceiro post.",
  //     horas: "Agora mesmo",
  //   },
  // ]);

  // const currentUserId = "usuario123";

  // const [comentarios, setComentarios] = useState<{
  //   [key: number]: { texto: string; userId: string }[];
  // }>({
  //   0: [],
  //   1: [],
  //   2: [],
  // });

  // const [novoComentario, setNovoComentario] = useState<{
  //   [key: number]: string;
  // }>({
  //   0: "",
  //   1: "",
  //   2: "",
  // });

  // const [comentarioEditando, setComentarioEditando] = useState<{
  //   postId: number | null;
  //   comentarioIndex: number | null;
  //   texto: string;
  // }>({ postId: null, comentarioIndex: null, texto: "" });

  // const [postEditando, setPostEditando] = useState<{
  //   id: number | null;
  //   legenda: string;
  // }>({
  //   id: null,
  //   legenda: "",
  // });

  // // function handleImageChange(
  // //   e: React.ChangeEvent<HTMLInputElement>,
  // //   postId: number
  // // ) {
  // //   const file = e.target.files?.[0];
  // //   if (!file) return;
  // //   const reader = new FileReader();
  // //   reader.onloadend = () => {
  // //     setPosts((prev) =>
  // //       prev.map((post) =>
  // //         post.id === postId
  // //           ? { ...post, imagem: reader.result as string }
  // //           : post
  // //       )
  // //     );
  // //   };
  // //   reader.readAsDataURL(file);
  // // }


  // function editarPost(postId: number) {
  //   const post = posts.find((p) => p.id === postId);
  //   if (post) {
  //     setPostEditando({ id: post.id, legenda: post.legenda });
  //   }
  //   setMenuOpen(null);
  // }

  // function salvarEdicaoPost() {
  //   setPosts((prev) =>
  //     prev.map((post) =>
  //       post.id === postEditando.id
  //         ? { ...post, legenda: postEditando.legenda }
  //         : post
  //     )
  //   );
  //   setPostEditando({ id: null, legenda: "" });
  // }

  // function cancelarEdicaoPost() {
  //   setPostEditando({ id: null, legenda: "" });
  // }

  // function excluirPost(postId: number) {
  //   setPosts((prev) => prev.filter((post) => post.id !== postId));
  //   setMenuOpen(null);
  // }

  // function adicionarComentario(postId: number) {
  //   if (novoComentario[postId]?.trim() === "") return;
  //   setComentarios((prev) => ({
  //     ...prev,
  //     [postId]: [
  //       ...(prev[postId] || []),
  //       { texto: novoComentario[postId], userId: currentUserId },
  //     ],
  //   }));
  //   setNovoComentario((prev) => ({
  //     ...prev,
  //     [postId]: "",
  //   }));
  // }

  // function excluirComentario(postId: number, comentarioIndex: number) {
  //   setComentarios((prev) => ({
  //     ...prev,
  //     [postId]: prev[postId].filter((_, index) => index !== comentarioIndex),
  //   }));
  // }

  // function iniciarEdicaoComentario(postId: number, comentarioIndex: number) {
  //   const comentario = comentarios[postId][comentarioIndex];
  //   setComentarioEditando({ postId, comentarioIndex, texto: comentario.texto });
  // }

  // function salvarEdicaoComentario() {
  //   const { postId, comentarioIndex, texto } = comentarioEditando;
  //   if (postId === null || comentarioIndex === null || texto.trim() === "")
  //     return;
  //   setComentarios((prev) => ({
  //     ...prev,
  //     [postId]: prev[postId].map((comentario, index) =>
  //       index === comentarioIndex ? { ...comentario, texto } : comentario
  //     ),
  //   }));
  //   setComentarioEditando({ postId: null, comentarioIndex: null, texto: "" });
  // }

  return (
    <>
      <Nav />
      <div className={style.mainContainer}>
        <div className={style.profileSection}>
          <div className={style.profileSectionFixed}>
            <section>
              <h1 className={style.profileTitle}>Perfil</h1>
              <div className={style.profileImage}>
                {fotoPerfil ? (
                  <img className={style.fotoPerfil}
                    src={fotoPerfil}
                    alt="Foto de perfil"
                  />
                ) : (

                  <img src="../public/img/userImg.jpg" alt="" className={style.postIcon} />
                )}
              </div>
              <div className={style.profileInfo}>
                <h2 className={style.profileName}>{user?.nome}</h2>
                <section className={style.profileDescricaoDiv}>
                  <p className={style.profileDescricao}>{user?.description}</p>
                </section>
                <button className={style.editProfileButton} onClick={editar}>
                  Editar perfil
                </button>
              </div>
              <div className={style.botaoPremium}>
                <Link to="/premium" className={style.premiumLink}>
                  Se torne premium
                </Link>
              </div>
            </section>
          </div>
        </div>

        <div className={style.feedSection}>
          {/* Título e botão "+" lado a lado */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 70, }} >
            <h2 className={style.feedTitle}>Seu Feed</h2>
            <button className={style.botaoMais} onClick={() => navigate("/publicar")} aria-label="Adicionar">
              <Icon.Plus size={22} />
            </button>
          </div>

          {/* {posts.map((post) => ( */}
          <div style={{ marginBottom: 40 }}>

            {publicacoes.length === 0 ? (
              <p className={style.nenhumaPublic}>Nenhuma publicação ainda.</p>
            ) : (
              publicacoes.map((pub) => (
                <div key={pub.id} >
                  <div className={style.postCard} >
                    <div className={style.postHeaderContainer}>
                      {fotoPerfil ? (
                        <img
                          src={fotoPerfil}
                          alt="Foto de perfil"
                          className={style.postIcon}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <img src="../public/img/userImg.jpg" alt="" className={style.postIcon} />
                      )}
                      <h3 className={style.postHeader}>{user?.nome}</h3>
                    </div>

                    <div className={style.postBody}>
                      {pub.anexar && pub.anexar.length > 0 ? (
                        <img src={`http://localhost:3000/${pub.anexar}`} alt="" className={style.imgPost} />
                      ) : null}
                    </div>
                      <p className={style.legendaPost}>{pub?.legenda}</p>
                    {/* <div className={style.menuContainer}>
                    <Icon.ThreeDotsVertical
                      className={style.menuIcon}
                      onClick={() =>
                        setMenuOpen(menuOpen === post.id ? null : post.id)
                      }
                    />
                    {menuOpen === post.id && (
                      <div className={style.menuDropdown}>
                        <button onClick={() => editarPost(post.id)}>
                          Editar
                        </button>
                        <button onClick={() => excluirPost(post.id)}>
                          Excluir post
                        </button>
                      </div>
                    )}
                  </div> */}
                    <div className={style.comentarios}>

                      <section>
                        <h4>Comentários:</h4>
                      </section>

                      <ul className={style.comentariosLista}>
                        {comentarios[pub.id]?.map((comentario, index) => (
                          <li key={index} className={style.comentarioItem}>
                            {comentarioEditando.postId === pub.id &&
                              comentarioEditando.comentarioIndex === index ? (
                              // ...
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
                                        onClick={() => iniciarEdicaoComentario(pub.id, index)}
                                      >
                                        <Icon.Pencil size={16} />
                                      </span>
                                      <span
                                        className={style.comentarioAcao}
                                        onClick={() => excluirComentario(pub.id, index)}
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
                          value={novoComentario[pub.id] || ""}
                          onChange={(e) =>
                            setNovoComentario((prev) => ({
                              ...prev,
                              [pub.id]: e.target.value,
                            }))
                          }
                          className={style.comentarioTexto}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") adicionarComentario(pub.id);
                          }}
                        />
                        <button
                          onClick={() => adicionarComentario(pub.id)}
                          className={style.comentarioBotao}
                        >
                          Comentar
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <h3 className={style.horas}>{post.horas}</h3> */}
                  {/* <img
                    src={post.imagem}
                    alt="Post"
                    className={style.imagem}
                    {/* {post.imagem ? (
                      <>
                      <img
                      src={post.imagem}
                      alt="Post"
                      className={style.imagem}
                      />
                      <div className={style.lateral}></div>
                      </>
                      ) : (
                        <label className={style.uploadLabel}>
                        <Icon.Camera size={32} />
                        <span className={style.imgCard}>Adicionar imagem</span>
                        <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                      onChange={(e) => handleImageChange(e, post.id)}
                      />
                      </label>
                      )} */}
                </div>
              )))}

          </div>
        </div>
      </div>
    </>
  );
}