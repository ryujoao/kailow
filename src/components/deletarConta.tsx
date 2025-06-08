import style from "../style/deletarConta.module.css";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";


export default function Deletar({ onClose, id }: { onClose: () => void; id: number }) {

    const token = localStorage.getItem("token") || "";
    const notifySuccess = () => toast.success("Sua conta foi deletada.");
    const notifyError = () => toast.error("Erro ao deletar conta");
    const navigate = useNavigate()

    //deletar a conta
    async function deletarConta() {
        try {
            const response = await fetch(`http://localhost:3000/configuracao/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                notifySuccess();
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