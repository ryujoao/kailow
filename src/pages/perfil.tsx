import { useNavigate, useParams, Link } from "react-router-dom";
import Nav from "../components/navbar";
import style from "../style/perfil.module.css";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { EditarPerfil } from "./editarPerfil";

export default function Perfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editarPerfil, setEditarPerfil] = useState<EditarPerfil>();

  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  const [posts, setPosts] = useState([
    {
      id: 0,
      imagem: "",
      legenda: "Este é o conteúdo do primeiro post.",
      horas: "Há 11 horas",
    },
    {
      id: 1,
      imagem: "",
      legenda: "Este é o conteúdo do segundo post.",
      horas: "Há 5 horas",
    },
    {
      id: 2,
      imagem: "",
      legenda: "Este é o conteúdo do terceiro post.",
      horas: "Agora mesmo",
    },
  ]);

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

  const [postEditando, setPostEditando] = useState<{
    id: number | null;
    legenda: string;
  }>({
    id: null,
    legenda: "",
  });

  const [estrela, setEstrela] = useState(4.5);

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>,
    postId: number
  ) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? { ...post, imagem: reader.result as string }
            : post
        )
      );
    };
    reader.readAsDataURL(file);
  }

  function editar() {
    navigate("/editar");
  }

  function getEditarPerfil() {
    fetch(`http://localhost:3000/produto/${id}`)
      .then((res) => res.json())
      .then((data) => setEditarPerfil(data));
  }

  function editarPost(postId: number) {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      setPostEditando({ id: post.id, legenda: post.legenda });
    }
    setMenuOpen(null);
  }

  function salvarEdicaoPost() {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postEditando.id
          ? { ...post, legenda: postEditando.legenda }
          : post
      )
    );
    setPostEditando({ id: null, legenda: "" });
  }

  function cancelarEdicaoPost() {
    setPostEditando({ id: null, legenda: "" });
  }

  function excluirPost(postId: number) {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
    setMenuOpen(null);
  }

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

  useEffect(() => {
    getEditarPerfil();
  }, []);

  return (
    <>
      <Nav />
      <div className={style.mainContainer}>
        <div className={style.profileSection}>
          <div className={style.profileSectionFixed}>
            <h1 className={style.profileTitle}>Perfil</h1>
            <div className={style.profileImage}>
              <Icon.PersonCircle className={style.profileIcon} />
            </div>
            <div className={style.starProfile}>
              <Icon.StarFill
                className={style.starIcon}
                style={{ cursor: "pointer" }}
                onClick={() => setEstrela((prev) => prev + 0.1)}
              />
              <p className={style.avaliaPerfil}>{estrela.toFixed(1)}</p>
            </div>
            <div className={style.profileInfo}>
              <h2 className={style.profileName}>Antonio Kobayashi</h2>
              <p className={style.profileDescricao}>
                {editarPerfil?.descricao}
              </p>
              <div className={style.profileInteresse}>
                <h3>Interesses de vaga em:</h3>
                <ul className={style.listaInteresse}>
                  <li>Estagiário</li>
                  <li>Aprendiz</li>
                </ul>
              </div>
              <strong className={style.profileResume}>
                Informações pessoais e Curriculum:
              </strong>
              <button className={style.editProfileButton} onClick={editar}>
                Editar perfil
              </button>
            </div>
            <div className={style.botaoPremium}>
              <Link to="/premium" className={style.premiumLink}>
                Se torne premium
              </Link>
            </div>
          </div>
        </div>

        <div className={style.feedSection}>
          <h2 className={style.feedTitle}>Seu Feed</h2>
          {posts.map((post) => (
            <div key={post.id} style={{ marginBottom: 40 }}>
              <div className={style.postCard}>
                <div className={style.postHeaderContainer}>
                  <Icon.PersonCircle className={style.postIcon} />
                  <h3 className={style.postHeader}>Você publicou isso</h3>
                  <div className={style.menuContainer}>
                    <Icon.ThreeDotsVertical
                      className={style.menuIcon}
                      onClick={() =>
                        setMenuOpen(menuOpen === post.id ? null : post.id)
                      }
                    />
                    {menuOpen === post.id && (
                      <div className={style.menuDropdown}>
                        <button onClick={() => editarPost(post.id)}>
                          Editar legenda
                        </button>
                        <button onClick={() => excluirPost(post.id)}>
                          Excluir post
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <h3 className={style.horas}>{post.horas}</h3>
                <div className={style.postBody}>
                  {post.imagem ? (
                    <>
                      <img
                        src={post.imagem}
                        alt="Post"
                        className={style.imagem}
                      />
                      <div className={style.lateral}>
                        {/* Coloque aqui botões, textos ou outros elementos que devem acompanhar a altura da imagem */}
                      </div>
                    </>
                  ) : (
                    <label className={style.uploadLabel}>
                      <span className={style.imgCard}>Adicionar imagem</span>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => handleImageChange(e, post.id)}
                      />
                    </label>
                  )}
                </div>
                {/* Legenda fora do card cinza, mas dentro do card do post */}
                <div className={style.postLegenda}>
                  {postEditando.id === post.id ? (
                    <>
                      <input
                        type="text"
                        value={postEditando.legenda}
                        onChange={(e) =>
                          setPostEditando((prev) => ({
                            ...prev,
                            legenda: e.target.value,
                          }))
                        }
                        className={style.comentarioEditInput}
                        placeholder="Digite a legenda..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter") salvarEdicaoPost();
                        }}
                      />
                      <span
                        className={style.comentarioAcao}
                        onClick={salvarEdicaoPost}
                      >
                        Salvar
                      </span>
                      <span
                        className={style.comentarioAcao}
                        onClick={cancelarEdicaoPost}
                      >
                        Cancelar
                      </span>
                    </>
                  ) : (
                    <>
                      <p className={style.legendaPost}>{post.legenda}</p>
                      <span
                        className={style.comentarioAcao}
                        onClick={() => editarPost(post.id)}
                        title="Editar legenda"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") editarPost(post.id);
                        }}
                      ></span>
                    </>
                  )}
                </div>
                <div className={style.comentarios}>
                  <h4>Comentários:</h4>
                  <ul className={style.comentariosLista}>
                    {comentarios[post.id]?.map((comentario, index) => (
                      <li key={index} className={style.comentarioItem}>
                        {comentarioEditando.postId === post.id &&
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
                              {comentario.userId === currentUserId && (
                                <>
                                  <span
                                    className={style.comentarioAcao}
                                    onClick={() =>
                                      iniciarEdicaoComentario(post.id, index)
                                    }
                                  >
                                    <Icon.Pencil size={16} />
                                  </span>
                                  <span
                                    className={style.comentarioAcao}
                                    onClick={() =>
                                      excluirComentario(post.id, index)
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
                      value={novoComentario[post.id] || ""}
                      onChange={(e) =>
                        setNovoComentario((prev) => ({
                          ...prev,
                          [post.id]: e.target.value,
                        }))
                      }
                      className={style.comentarioTexto}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") adicionarComentario(post.id);
                      }}
                    />
                    <button
                      onClick={() => adicionarComentario(post.id)}
                      className={style.comentarioBotao}
                    >
                      Comentar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
