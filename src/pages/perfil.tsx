import { useNavigate, useParams, Link } from 'react-router-dom';
import Nav from '../components/navbar';
import style from '../style/perfil.module.css';
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { EditarPerfil } from './editarPerfil';

export default function Perfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editarPerfil, setEditarPerfil] = useState<EditarPerfil>();

  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  const [posts, setPosts] = useState([
    { id: 0, conteudo: 'Este é o conteúdo do primeiro post.', horas: 'Há 11 horas' },
    { id: 1, conteudo: 'Este é o conteúdo do segundo post.', horas: 'Há 5 horas' },
    { id: 2, conteudo: 'Este é o conteúdo do terceiro post.', horas: 'Agora mesmo' },
  ]);

  const [comentarios, setComentarios] = useState<{ [key: number]: string[] }>({
    0: [],
    1: [],
    2: [],
  });

  const [novoComentario, setNovoComentario] = useState<{ [key: number]: string }>({
    0: '',
    1: '',
    2: '',
  });

  const [comentarioEditando, setComentarioEditando] = useState<{
    postId: number | null;
    comentarioIndex: number | null;
    texto: string;
  }>({ postId: null, comentarioIndex: null, texto: '' });

  const [menuComentarioOpen, setMenuComentarioOpen] = useState<{
    postId: number | null;
    comentarioIndex: number | null;
  }>({ postId: null, comentarioIndex: null });

  const [postEditando, setPostEditando] = useState<{ id: number | null; conteudo: string }>({
    id: null,
    conteudo: '',
  });

  const [estrela, setEstrela] = useState(4.5);

  function editar() {
    navigate('/editar');
  }

  function getEditarPerfil() {
    fetch(`http://localhost:3000/produto/${id}`)
      .then((res) => res.json())
      .then((data) => setEditarPerfil(data));
  }

  function editarPost(postId: number) {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      setPostEditando({ id: post.id, conteudo: post.conteudo });
    }
    setMenuOpen(null);
  }

  function salvarEdicaoPost() {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postEditando.id ? { ...post, conteudo: postEditando.conteudo } : post
      )
    );
    setPostEditando({ id: null, conteudo: '' });
  }

  function cancelarEdicaoPost() {
    setPostEditando({ id: null, conteudo: '' });
  }

  function excluirPost(postId: number) {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
    setMenuOpen(null);
  }

  function adicionarComentario(postId: number) {
    if (novoComentario[postId]?.trim() === '') return;
    setComentarios((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), novoComentario[postId]],
    }));
    setNovoComentario((prev) => ({
      ...prev,
      [postId]: '',
    }));
  }

  function excluirComentario(postId: number, comentarioIndex: number) {
    if (window.confirm('Tem certeza de que deseja excluir este comentário?')) {
      setComentarios((prev) => ({
        ...prev,
        [postId]: prev[postId].filter((_, index) => index !== comentarioIndex),
      }));
      setMenuComentarioOpen({ postId: null, comentarioIndex: null });
    }
  }

  function iniciarEdicaoComentario(postId: number, comentarioIndex: number) {
    const texto = comentarios[postId][comentarioIndex];
    setComentarioEditando({ postId, comentarioIndex, texto });
    setMenuComentarioOpen({ postId: null, comentarioIndex: null });
  }

  function salvarEdicaoComentario() {
    const { postId, comentarioIndex, texto } = comentarioEditando;
    if (postId === null || comentarioIndex === null || texto.trim() === '') return;
    setComentarios((prev) => ({
      ...prev,
      [postId]: prev[postId].map((comentario, index) =>
        index === comentarioIndex ? texto : comentario
      ),
    }));
    setComentarioEditando({ postId: null, comentarioIndex: null, texto: '' });
    alert('Comentário editado com sucesso!');
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
                style={{ cursor: 'pointer' }}
                onClick={() => setEstrela((prev) => prev + 0.1)}
              />
              <p className={style.avaliaPerfil}>{estrela.toFixed(1)}</p>
            </div>
            <div className={style.profileInfo}>
              <h2 className={style.profileName}>Antonio Kobayashi</h2>
              <p className={style.profileDescricao}>{editarPerfil?.descricao}</p>
              <div className={style.profileInteresse}>
                <h3>Interesses de vaga em:</h3>
                <ul className={style.listaInteresse}>
                  <li>Estagiário</li>
                  <li>Aprendiz</li>
                </ul>
              </div>
              <strong className={style.profileResume}>Informações pessoais e Curriculum:</strong>
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
            <div className={style.postCard} key={post.id}>
              <div className={style.postHeaderContainer}>
                <Icon.PersonCircle className={style.postIcon} />
                <h3 className={style.postHeader}>Você publicou isso</h3>
                <div className={style.menuContainer}>
                  <Icon.ThreeDotsVertical
                    className={style.menuIcon}
                    onClick={() => setMenuOpen(menuOpen === post.id ? null : post.id)}
                  />
                  {menuOpen === post.id && (
                    <div className={style.menuDropdown}>
                      <button onClick={() => editarPost(post.id)}>Editar post</button>
                      <button onClick={() => excluirPost(post.id)}>Excluir</button>
                    </div>
                  )}
                </div>
              </div>
              <h3 className={style.horas}>{post.horas}</h3>
              <div className={style.postBody}>
                {postEditando.id === post.id ? (
                  <>
                    <input
                      type="text"
                      value={postEditando.conteudo}
                      onChange={(e) =>
                        setPostEditando((prev) => ({
                          ...prev,
                          conteudo: e.target.value,
                        }))
                      }
                      className={style.comentarioTexto}
                    />
                    <button onClick={salvarEdicaoPost} className={style.comentarioBotao}>
                      Salvar
                    </button>
                    <button onClick={cancelarEdicaoPost} className={style.comentarioBotao}>
                      Cancelar
                    </button>
                  </>
                ) : (
                  <p>{post.conteudo}</p>
                )}
              </div>
              <div className={style.comentarios}>
                <h4>Comentários:</h4>
                <div className={style.todasOpcoes}>
                  <h6 >Excluir</h6>
                  <h6>Editar</h6>
                </div>
                <ul className={style.comentariosLista}>
                  {comentarios[post.id]?.map((comentario, index) => (
                    <li key={index}>
                      {comentarioEditando.postId === post.id &&
                        comentarioEditando.comentarioIndex === index ? (
                        <>
                          <input
                            type="text"
                            value={comentarioEditando.texto}
                            onChange={(e) =>
                              setComentarioEditando((prev) => ({
                                ...prev,
                                texto: e.target.value,
                              }))
                            }
                          />
                          <button onClick={salvarEdicaoComentario}>Salvar</button>
                        </>
                      ) : (
                        <>
                          {comentario}
                          <div className={style.menuContainer}>

                            {menuComentarioOpen.postId === post.id &&
                              menuComentarioOpen.comentarioIndex === index && (
                                <div className={style.menuDropdown}>
                                  <button
                                    onClick={() => iniciarEdicaoComentario(post.id, index)}
                                  >
                                    Editar
                                  </button>
                                  <button
                                    onClick={() => excluirComentario(post.id, index)}
                                  >
                                    Excluir
                                  </button>
                                </div>
                              )}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <div className={style.comentarioInput}>
                  <input
                    type="text"
                    placeholder="Escreva um comentário..."
                    value={novoComentario[post.id] || ''}
                    onChange={(e) =>
                      setNovoComentario((prev) => ({
                        ...prev,
                        [post.id]: e.target.value,
                      }))
                    }
                    className={style.comentarioTexto}
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
          ))}
        </div>
      </div>
    </>
  );
}