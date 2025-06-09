import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import style from "../style/navbar.module.css"
import Acessibilidade from "./acessibilidade";

const DropdownHome = () => {
    const [showAcessibilidade, setShowAcessibilidade] = useState(false);
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(true);

    function handleAcessibilidadeClick() {
        setShowDropdown(false);
        setShowAcessibilidade(true);
    }

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

    function handleCloseAcessibilidade() {
        setShowAcessibilidade(false);
        setShowDropdown(true);
    }

    return (
        <>
            {showDropdown && (
                <div className={style.dropdownHome}>
                    <div className={style.dropdownHomeCard}>
                        <ul className={style.dropdownHomeElements}>
                            <li><button type="button" onClick={Editar}> Configurações de perfil</button></li>
                            <li><button type="button" onClick={Configuracao}>Configurações avançadas</button></li>
                            <li><button type="button" onClick={handleAcessibilidadeClick}>Acessibilidade</button></li>
                            <li><button type="button" onClick={handleLogout}>Sair</button></li>
                        </ul>
                    </div>
                </div>
            )}
            {showAcessibilidade && (
                <Acessibilidade onClose={handleCloseAcessibilidade} />
            )}
        </>
    );
}

export default DropdownHome;