import { useState } from 'react';
import style from '../style/entrarComunidade.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BotaoComunidade() {
  const [logado, setLogado] = useState(false);

  const alternarEstado = () => {
    setLogado(!logado);
    if (!logado) {
      toast.success('Você entrou na comunidade');
    } else {
      toast.success('Você saiu da comunidade');
    }
  };

  return (
    <>
      <button onClick={alternarEstado} className={style.btnComunidade}>
        {logado ? 'Sair' : 'Entrar'}
      </button>
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
    </>
  );
}

export default BotaoComunidade;