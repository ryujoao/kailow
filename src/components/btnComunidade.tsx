import { useState } from 'react';
import style from '../style/entrarComunidade.module.css';

function BotaoComunidade() {
  const [logado, setLogado] = useState(false);

  const alternarEstado = () => {
    setLogado(!logado);
  };

  return (
    <button onClick={alternarEstado} className={style.btnComunidade}>
      {logado ? 'Sair' : 'Entrar'}
    </button>
  );
}

export default BotaoComunidade;
