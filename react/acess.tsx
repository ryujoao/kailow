import style from "../style/navbar.module.css"
import { useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import DropdownHome from "./dropdownHome";
import { useState } from "react";
 
export function Nav() {
 
    const navigate = useNavigate()
 
    function home() {
        navigate('/home')
    }
 
    const [isFilled, setIsFilled] = useState(false);
    const Fill = () => {
        setIsFilled(!isFilled);
    };
 
    const [mostrarConfig, setMostrarConfig] = useState(false)
 
    return (
 
        <><nav>
            <div className={style.navContainer}>
                <div className={style.navLogo} onClick={home}>
                    <img src="../public/img/logo.png" alt="Logo" />
                    <h1 className={style.kailow}>Kailow</h1>
                </div>
                <div className={style.navCategorias}>
                    <a href="/sobre">Sobre</a>
                    <a href="/comunidades">Comunidades</a>
                    <a href="/perfil">Perfil</a>
                </div>
 
                <form className={style.formSearch}>
                    <label className={style.labelSearch} htmlFor="search">
                        <input className={style.inputSearch} type="text" placeholder="Pesquisa" id="search" />
                        <div className={style.fancyBg}></div>
                        <div className={style.search}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                        </div>
                    </label>
                </form>
 
                <section className={style.navIcons} onClick={Fill}>
                    <div className={style.iconConfig}>
                        <Icon.Gear style={{display: isFilled ? "none" : "block", color: "#CDD5DB", height: "4.5dvh", width: "4.5dvh", cursor: "pointer" }} onClick={() => setMostrarConfig((prevState) => !prevState)} />
                        {/* <Icon.Gear style={{display: isFilled ? "block" : "none", color: "#CDD5DB", height: "4.5dvh", width: "4.5dvh", cursor: "pointer" }} /> */}
                    </div>
                    <div className={style.iconConfigFill}>
                        <Icon.GearFill style={{display: isFilled ? "block" : "none", color: "#CDD5DB", height: "4.5dvh", width: "4.5dvh", cursor: "pointer" }} onClick={() => setMostrarConfig((prevState) => !prevState)} />
                    </div>
                    {mostrarConfig && <DropdownHome />}
                    {/* <DropdownHome /> */}
 
                </section>
            </div>
        </nav>
        </>
 
    )
}
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
 
 