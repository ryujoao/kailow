import { useNavigate } from 'react-router-dom';
import { Nav } from '../components/navbar';
import style from '../style/perfil.module.css';
import * as Icon from 'react-bootstrap-icons';

export default function Perfil() {
    
    const navigate = useNavigate();
    
    function Editar() {
        navigate('/editar')
    }

  return (
    <>
    <Nav/>
    <div className={style.mainContainer}>
      <div className={style.profileSection}>
        <h1 className={style.profileTitle}>Perfil</h1>

        <div className={style.profileImage}>
          {/* <img src="../img/iconeDapaginaPErfil.jpg" alt="foto de perfil" /> */}
          <Icon.PersonCircle style={{width:"150px", height:"150px"}}/>
        </div>

        <div className={style.starProfile}>
            <Icon.StarFill style={{width:"20px", height:"20px", color: "yellow"}}/>
          <p className={style.avaliaPerfil}>4.5</p>
        </div>

        <div className={style.profileInfo}>
          <h2 className={style.profileName}>Antonio Kobayashi</h2>
          <p className={style.profileDescription}>
            Estudante técnico em desenvolvimento de sistemas pelo{' '}
            <strong>SENAI Cotia - Escola SENAI "Ricardo Lerner".</strong>
          </p>

          <div className={style.profileInterests}>
            <h3>Interesses de vaga em:</h3>
            <ul className={style.interestList}>
              <li>Estagiário</li>
              <li>Aprendiz</li>
            </ul>
          </div>

          <strong className={style.profileResume}>Informações pessoais e Curriculum:</strong>

          <h1 className={style.editProfileButton} onClick={Editar}>
            Editar perfil
          </h1>
        </div>
      </div>
    </div>
    </>
  );
}