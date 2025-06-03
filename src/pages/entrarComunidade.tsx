import { useState } from "react";
import style from '../style/entrarComunidade.module.css';
import Nav from "../components/navbar";

export default function EntrarComunidade() {
  const [abaAtiva, setAbaAtiva] = useState<"sobre" | "discussao" | "vagas">("sobre");

  return (
<>
    <Nav />
    
    <div className={style.mainContainer}>
      {/* Sidebar */}
      <div className={style.sidebar}>
        
        <div className={style.sidebarMenu}>
          <button className={style.menuItem}>Home</button>
          <button className={style.menuItem}>Sobre</button>
          <button className={style.menuItem}>Comunidades</button>
          <button className={style.menuItem}>Perfil</button>
          <button className={style.menuItem}>Pesquisa</button>
        </div>

        <div className={style.communityList}>
          <h3>Marketing Digital Modelou</h3>
          <h4>Supermercado klingo</h4>
        </div>

        <div className={style.currentCommunity}>
          <h3>Desenvolvedores Taparoxo</h3>
          <p>📍 São Paulo - Brasil</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={style.content}>
        <div className={style.tabs}>
          <button 
            className={`${style.tabButton} ${abaAtiva === "sobre" ? style.active : ""}`}
            onClick={() => setAbaAtiva("sobre")}
          >
            Sobre
          </button>
          <button 
            className={`${style.tabButton} ${abaAtiva === "discussao" ? style.active : ""}`}
            onClick={() => setAbaAtiva("discussao")}
          >
            Discussão
          </button>
          <button 
            className={`${style.tabButton} ${abaAtiva === "vagas" ? style.active : ""}`}
            onClick={() => setAbaAtiva("vagas")}
          >
            Vagas
          </button>
        </div>

        <div className={style.tabContent}>
          {abaAtiva === "sobre" && (
            <div className={style.aboutSection}>
              <h2>Sobre Nós</h2>
              <p>
                Bem-vindo a <strong>Desenvolvedores Taparoxo</strong>, uma empresa inovadora no desenvolvimento de software. 
                Nossa missão e criar soluções tecnológicas eficientes e escaláveis para empresas de todas as tamanhos.
              </p>
              <p>
                Inicialmente com diversas tecnologias modernas, incluindo <strong>React, Node.js</strong>, Python e <strong>Platter</strong>, 
                oferecendo serviços personalizados do desenvolvimento web e mobile.
              </p>
              <p>
                Neste conhecimento é com a qualidade, invenção e entrega de produtos que atendam às necessidades dos nossos clientes. 
                Se você procura uma equipe dedicada e apaixonada por tecnologia, você veio ao login certo.
              </p>
            </div>
          )}

          {abaAtiva === "discussao" && (
            <div className={style.discussionSection}>
              <h2>Buradul a ur emmerts</h2>
              <div className={style.discussionHeader}>
                <span><strong>Coumar</strong> | <strong>Indicar procedimentos</strong></span>
                <p>Les èoes commentá es community</p>
              </div>
              
              <div className={style.discussionText}>
                <p>
                  Lavara i ser muntas al candidat y m. auribar co. jo o d docas. Jo o. Comandac. Ívasa o o filiacosago somamos...  
                  celebrantar the ship, arranger, n d corral ódoosa: npama.  
                  obtainingsc loan announ cime cesigod.united.
                </p>
                <div className={style.checkboxItem}>
                  <input type="checkbox" id="cultural" />
                  <label htmlFor="cultural">CULTURAL → SUPERIOR</label>
                </div>
              </div>

              <div className={style.discussionItem}>
                <h3>Quem os sos oupoprotrides community</h3>
                <p>
                  Levara i ser muntas al candidat y m. auribar co. jo o d docas. Jo o. Comandac. Ívasa o o filiacosago somamos...  
                  celebrantar the ship, arranger, n d corral ódoosa: npama.  
                  obtainingsc loan announ cime cesigod.united.
                </p>
                <div className={style.checkboxItem}>
                  <input type="checkbox" id="cultural2" />
                  <label htmlFor="cultural2">CULTURAL → SUPERIOR</label>
                </div>
              </div>

              <div className={style.discussionItem}>
                <h3>Leser conomgerek kios</h3>
                <p>Moscigo praeod outcitas.<br />Dartining d'acoma</p>
              </div>

              <div className={style.discussionItem}>
                <h3>Jolby jos folote su obon?</h3>
                <p>
                  Nazara a molocar of test brico.<br />
                  Souvirles mapura de tablosdons...<br />
                  particating d'acoma
                </p>
              </div>

              <div className={style.discussionItem}>
                <h3>Compeh blea Goa?</h3>
                <p>Descartes dours oufindaôalio.</p>
                <a href="www.decorado.de/abras">www.decorado.de/abras</a>
              </div>
            </div>
          )}

          {abaAtiva === "vagas" && (
            <div className={style.jobsSection}>
              <h2>Vagas de Emprego</h2>
              <div className={style.jobCards}>
                <div className={style.jobCard}>
                  <h3>Programador Mobile</h3>
                  <p>Equipe: AppTech Solutions</p>
                  <p>Localização: São Paulo</p>
                  <p>Salário: R$ 7.500</p>
                </div>
                <div className={style.jobCard}>
                  <h3>Desenvolvedor Front-End</h3>
                  <p>Equipe: Tech Solutions</p>
                  <p>Localização: Remoto</p>
                  <p>Salário: R$ 8.000</p>
                </div>
                <div className={style.jobCard}>
                  <h3>Analista de Dados</h3>
                  <p>Equipe: DataCorp</p>
                  <p>Localização: São Paulo</p>
                  <p>Salário: R$ 6.500</p>
                </div>
                <div className={style.jobCard}>
                  <h3>Engenheiro de Software</h3>
                  <p>Equipe: CodeMasters</p>
                  <p>Localização: Remoto</p>
                  <p>Salário: R$ 9.000</p>
                </div>
              </div>
              <div className={style.jobNavigation}>
                <button>◀ Anterior</button>
                <button>Próximo ▶</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}