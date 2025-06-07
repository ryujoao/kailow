import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import style from "../style/navbar.module.css"
import Acessibilidade from "./acessibilidade"; // Importe o componente correto

const DropdownHome = () => {
    const [showAcessibilidade, setShowAcessibilidade] = useState(false);
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
        navigate("/");
    }
 
    function handleAcessibilidadeClick() {
        setShowAcessibilidade(true);
    }

    function handleCloseAcessibilidade() {
        setShowAcessibilidade(false);
    }

    return (
        <>
            <div className={style.dropdownHome}>
                <div className={style.dropdownHomeCard}>
                    <ul className={style.dropdownHomeElements}>
                        <li onClick={Editar}>Config. pefil</li>
                        <li onClick={Configuracao}>Config. avançadas</li>
                        <li onClick={handleAcessibilidadeClick}>Acess.</li>
                        <li onClick={handleLogout}>Sair</li>
                    </ul>
                </div>
            </div>
            {showAcessibilidade && <Acessibilidade onClose={handleCloseAcessibilidade} open={showAcessibilidade} />}
        </>
    );
}

export default DropdownHome;