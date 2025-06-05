import style from "../style/deletarConta.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


export default function Deletar({ onClose }: { onClose: () => void }) {

    const token = localStorage.getItem("token") || "";
    const { id } = useParams();
    const notifySuccess = () => toast.success("Senha atualizada! Redirecionando ao login");
    const notifyError = () => toast.error("Erro ao deletar conta");
    const navigate = useNavigate()

    //deletar a conta

    async function deletarConta() {
        // if (!window.confirm("Tem certeza que deseja deletar sua conta?")) return;
        try {
            const response = await fetch(`http://localhost:3000/configuracao/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                notifySuccess();
                // Limpa o localStorage e redireciona para a tela de login
                localStorage.clear();
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                notifyError();
            }
        } catch (err) {
            notifyError();
        }
    }

    return (
        <div className={style.deletarOverlay}>
            <div className={style.cardDeletar}>
                <div className={style.enunciadoDeletar}>
                    <h1 className={style.deletar}>Você tem certeza que deseja deletar sua conta?</h1>
                    <p>Ao confirmar essa ação, você perderá sua conta permanentemente.</p>
                </div>
                <div className={style.botoesDeletar}>
                    <button className={style.buttonDeletar} onClick={deletarConta}>Sim</button>
                    <button className={style.buttonNaoDeletar} onClick={onClose}>Não</button>
                </div>
            </div>
        </div>
    )
}