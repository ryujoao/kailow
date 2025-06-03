import { useState } from "react";
import style from "../style/deletarConta.module.css";
import { useNavigate } from "react-router-dom";

export default function Deletar() {
    const navigate = useNavigate()

    function config() {
        navigate('/configuracao')
    }

    return (
        <div className={style.deletarOverlay}>
            <div className={style.cardDeletar}>
                <div className={style.enunciadoDeletar}>
                    <h1 className={style.deletar}>Você tem certeza que deseja deletar sua conta?</h1>
                    <p>Ao confirmar essa ação, você perderá sua conta permanentemente.</p>
                </div>
                <div className={style.botoesDeletar}>
                    <button className={style.buttonDeletar}>Sim</button>
                    <button className={style.buttonNaoDeletar} onClick={config}>Não</button>
                </div>
            </div>
        </div>
    )
}