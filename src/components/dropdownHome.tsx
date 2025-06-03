// import React from "react";
import { useNavigate } from 'react-router-dom'
import style from "../style/navbar.module.css"
// import Acessibilidade from './acessibilidade'

const DropdownHome = () => {

    const navigate = useNavigate()

    function Editar() {
        navigate('/editar')
    }
    function Configuracao() {
        navigate('/configuracao')
    }

    function handleLogout() {
        localStorage.removeItem("token");
        console.log("Usuário deslogado com sucesso!");
        // Redirecione para a tela de login ou inicial
        navigate("/"); // ou para onde desejar
    }
    // const [mostrarAcessibilidade, setMostrarAcessibilidade] = useState(false);


    return (
        <div className={style.dropdownHome}>
            <div className={style.dropdownHomeCard}>
                <ul className={style.dropdownHomeElements}>
                    <li onClick={Editar}>Config. pefil</li>
                    <li onClick={Configuracao}>Config. avançadas</li>
                    {/* <li onClick={() => setMostrarAcessibilidade(true)}>Acess.</li> */}
                    <li onClick={Configuracao}>Acess.</li>
                    <li onClick={handleLogout}>Sair</li>
                </ul>
            </div>
            {/* {mostrarAcessibilidade && <Acessibilidade />} */}
        </div>
    );
}

export default DropdownHome;