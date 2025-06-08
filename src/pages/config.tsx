import { useForm } from "react-hook-form";
import { Footer } from "../components/footer";
import Nav from "../components/navbar";
import style from "../style/config.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import Deletar from "../components/deletarConta";


type configType = {
  id: number;
  senha: string;
  novaSenha: string;
};

export default function Configuracoes() {

  const token = localStorage.getItem("token") || "";
  const [user, setUser] = useState<configType>();
  const [mensagem, setMensagem] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarSenha2, setMostrarSenha2] = useState(false);
  const navigate = useNavigate();
  const notifySuccess = () => toast.success("Senha atualizada! Redirecionando ao login");
  const [mostrarPopup, setMostrarPopup] = useState(false);


  const { register, handleSubmit, reset } = useForm<configType>();

  useEffect(() => {
    const userDecoded: any = jwtDecode(token);

    findUserById(userDecoded.id, token);
    reset({ id: userDecoded.id }); // Aqui atualiza o ID no formulário

  }, []);

  async function findUserById(id: number, token: string) {
    try {
      const response = await fetch("http://localhost:3000/configuracao/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data: configType = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  }

  async function handleconfig(data: configType) {
    console.log(data);

    try {
      const response = await fetch(`http://localhost:3000/configuracao/${data.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.ok) {
        notifySuccess();
        // setMensagem(res.msg || "Senha atualizada com sucesso!");
        setTimeout(() => { navigate("/"); }, 3000);
        localStorage.removeItem("token");
      } else {
        setMensagem(res.error || "Erro: Senha atual incorreta.");
      }
    } catch (error: any) {
      console.error("Erro na requisição:", error);
      setMensagem("Erro na comunicação com o servidor.");
    }
  }



  function toggleSenha() {
    setMostrarSenha(!mostrarSenha);
  }

  function toggleSenha2() {
    setMostrarSenha2(!mostrarSenha2);
  }


  return (
    <>
      <Nav />
      <div className={style.bodyConfig}>
        <h1 className={style.configHeader}>Configurações</h1>
        <div className={style.configContainer}>
          <div className={style.configMain}>

            <form onSubmit={handleSubmit(handleconfig)} method="post">
              <section className={style.configSection}>
                <h2 className={style.configTitle}>Preferências de Conta</h2>

                <input type="hidden" {...register("id")} />

                <div className={style.configItem}>
                  <label htmlFor="senha">Sua Senha:</label>
                  <div className={style.inputSenha}>
                    <input className={style.configInput} type={mostrarSenha ? "text" : "password"} id="senha" placeholder="Digite sua senha atual" autoComplete="off" {...register("senha")} required />
                    <section onClick={toggleSenha} className={style.olhos}>
                      {mostrarSenha ? <Icon.Eye /> : <Icon.EyeSlash />}
                    </section>
                  </div>
                </div>

                <div className={style.erroMensagem} style={{ color: "red", marginBottom: "10px" }}>
                  {mensagem}
                </div>

                <div className={style.configItem}>
                  <label htmlFor="novaSenha">Nova Senha:</label>
                  <div className={style.inputSenha}>
                    <input className={style.configInput} type={mostrarSenha2 ? "text" : "password"} id="novaSenha" placeholder="Digite uma nova senha" autoComplete="off" {...register("novaSenha")} required />
                    <section onClick={toggleSenha2} className={style.olhos}>
                      {mostrarSenha2 ? <Icon.Eye /> : <Icon.EyeSlash />}
                    </section>
                  </div>
                </div>
              </section>

              <section className={style.configSection}>
                <h2 className={style.configTitle}>Preferências de Privacidade</h2>
                <div className={style.configItem}>
                  <div className={style.checkbox}>
                    <input type="checkbox" id="notifications" defaultChecked />
                    <label htmlFor="notifications">Receber notificações por e-mail</label>
                  </div>
                </div>
                <div className={style.configItem}>
                  <div className={style.checkbox}>
                    <input type="checkbox" id="analytics" defaultChecked />
                    <label htmlFor="analytics">Compartilhar dados para análises</label>
                  </div>
                </div>
              </section>

              {/* <section style={{ marginTop: "60px" }} className={style.configSection}> */}
              <h3 className={style.configTermos} style={{ marginBottom: "30px", width: "30rem" }} onClick={() => navigate("/privacidade")}>
                Ler os termos de uso e política de privacidade
              </h3>

              {/* </section> */}
              <section className={style.configFooter}>
                <button type="submit" className={style.btnPrimary}>
                  Salvar Alterações
                </button>
              </section>
            </form>
            <h3 className={style.configDeletar} onClick={() => setMostrarPopup(true)}>Desejo deletar minha conta</h3>
            {mostrarPopup && user && (
              <Deletar onClose={() => setMostrarPopup(false)} id={user.id} />
            )}

          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
