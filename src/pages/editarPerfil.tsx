import { Nav } from '../components/navbar';
import style from '../style/editarPerfil.module.css';
import * as Icon from 'react-bootstrap-icons'

export default function EditarPerfil() {

    //       const cameraIcon = document.querySelector(".fotoEditarPerfil h3 img");
    //   const fileInput = document.getElementById("fileInput");

    //   cameraIcon.addEventListener("click", () => {
    //     fileInput.click(); // Abre o seletor de arquivos
    //   });

    //   fileInput.addEventListener("change", (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       alert(`Arquivo selecionado: ${file.name}`);
    //       // Aqui você pode implementar a lógica para enviar ou exibir a imagem
    //     }
    //   });
    return (
        <>
            <div className={style.bodyEditarPerfil}>
                <Nav />
                <div className={style.containerEditarPerfil}>
                    <div className={style.cardEditarPerfil}>
                        <h1 className={style.textSeuPerfil}>Seu perfil</h1>

                        <div className={style.userEditarPerfil}>
                            <Icon.PersonCircle style={{ color: "#CDD5DB", height: "15dvh", width: "15dvh", marginBottom:"15px" }} />
                            {/* imagem do usuario */}

                            <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <h3>Antonio Kobayashi</h3>
                            {/* nome usuario */}

                            <Icon.Camera style={{cursor: "pointer", color:"#fff", width: "25px", height:"25px"}}/>
                            </section>
                        </div>

                        <div className={style.formEditarPerfil}>
                            <form>
                                <label className={style.labelEditarPerfil} htmlFor='email'>E-mail</label>
                                <input className={style.inputEditarPerfil} id='email' type="text" value="antonio@gmail.com" required />

                                <label className={style.labelEditarPerfil} htmlFor='senha'>Senha atual</label>
                                <input className={style.inputEditarPerfil} id='senha' type="password" placeholder="Digite sua nova senha" required />

                                <label className={style.labelEditarPerfil} htmlFor='senha'>Nova senha</label>
                                <input className={style.inputEditarPerfil} id='senha' type="password" placeholder="Digite sua nova senha" required />

                                <button type="submit">Salvar Aterações</button>
                            </form>
                        </div >
                    </div>
                </div >

            </div>



            {/* <h2 id="textSeuPerfil">Seu Perfil</h2>
            <div class="fotoEditarPerfil">
               <img src="../img/iconeDapaginaPErfil.jpg" alt="">
               <h3>Antonio Kobayashi <img src="../img/camera.svg" alt=""></h3>
            </div>

            <div class="formEditarPerfil">
              <form action="/atualizarPerfil" method="POST">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" value="Antonio Kobayashi" required>
            
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" value="antonio@email.com" required>
            
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Digite sua nova senha">
            
                <button type="submit">Salvar Alterações</button>
              </form>
            </div>

            
  
    

            <input type="file" id="fileInput" style="display: none;" accept="image/*"></input> */}
        </>
    )
}