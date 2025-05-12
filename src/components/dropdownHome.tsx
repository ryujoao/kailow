// import React from "react";
import { useNavigate } from 'react-router-dom'
import style from "../style/navbar.module.css"

const DropdownHome = () => {

    const navigate = useNavigate()

    function cadastro() {
        navigate('/cadastro')
    }

    function login() {
        navigate('/')
    }
    function Editar() {
        navigate('/editar')
    }

    return (
        <div className={style.dropdownHome}>
            <ul className={style.dropdownHomeElements}>
                <li onClick={Editar}>Config. pefil</li>
                <li onClick={cadastro}>Config. avançadas</li>
                <li onClick={cadastro}>Acess.</li>
                <li onClick={login}>Sair</li>
            </ul>
        </div>
    );
}

export default DropdownHome;