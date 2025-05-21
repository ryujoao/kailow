import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/navbar';
import style from '../style/perfil.module.css';
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { EditarPerfil } from './editarPerfil';
 
export default function Perfil() {
  const navigate = useNavigate();
 
  const { id } = useParams()
  const [editarPerfil, setEditarPerfil] = useState<EditarPerfil>()
 
  function editar() {
    navigate('/editar');
  }
  function premium() {
    navigate('/premium');
  }
 
 
  function getEditarPerfil() {
    fetch(`http://localhost:3000/produto/${id}`)
      .then((res) => res.json())
      .then(data => setEditarPerfil(data))
  }
 
  useEffect(() => {
    getEditarPerfil()
  }, [])
 
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
      <Icon.StarFill className={style.starIcon} />
      <p className={style.avaliaPerfil}>4.5</p>
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
    <div className={style.botaoPremiumDiv}>
      <button className={style.botaoPremium} onClick={premium}>Se torne premium</button>
    </div>
  </div>
</div>
 
       
        <div className={style.vertical}></div>
        <div className={style.feedSection}>
          <h2 className={style.feedTitle}>Seu Feed</h2>
 
          {[1, 2, 3].map((post, idx) => (
            <div className={style.postCard} key={idx}>
              <div className={style.postHeaderContainer}>
                <Icon.PersonCircle className={style.postIcon} />
                <h3 className={style.postHeader}>
                  Você publicou isso
                </h3>
              </div>
              <h3 className={style.horas}>{idx === 0 ? 'Há 11 horas' : 'Há 5 horas'}</h3>
              <div className={style.postBody}>
                <p>
                  {idx === 0
                    ? 'Este é o conteúdo do primeiro post.'
                    : 'Este é o conteúdo do segundo post.'}
                </p>
              </div>
              <div className={style.comentarios}>
                <h4>Comentários:</h4>
                <ul className={style.comentariosLista}>
                  {/* Comentários serão adicionados aqui */}
                </ul>
                <div className={style.comentarioInput}>
                  <input
                    type="text"
                    placeholder="Escreva um comentário..."
                    className={style.comentarioTexto}
                  />
                  <button className={style.comentarioBotao}>Comentar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}