import style from "../style/navbar.module.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import DropdownHome from "./dropdownHome";
import { useState } from "react";
import SearchBar from "./searchBar";
import { usuariosCadastrados, comunidadesCadastradas } from "../data/dadosSite";

// Mapeamento das comunidades para suas rotas específicas
const comunidadeRotas: Record<string, string> = {
  "desenvolvedores taparoxo": "/entrarComunidade",
  "restaurante seringueira": "/outraComunidade",
  // Adicione outras comunidades e rotas aqui, se necessário
};

export default function Nav() {

  const navigate = useNavigate();
  const location = useLocation();

  function home() {
    navigate('/home');
  }

  const [isFilled, setIsFilled] = useState(false);
  const Fill = () => {
    setIsFilled(!isFilled);
  };

  const [mostrarConfig, setMostrarConfig] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Função para tratar a busca
  const handleSearch = (term: string) => {
    let comunidadeObj = undefined;
    if (term.startsWith("@")) {
      const usuario = term.slice(1).toLowerCase();
      if (usuariosCadastrados.map(u => u.toLowerCase()).includes(usuario)) {
        navigate(`/perfil/${usuario}`);
        return;
      } else {
        alert("Usuário não encontrado!");
        return;
      }
    } else if (term !== "") {
      // Busca o nome exato da comunidade (case insensitive)
      comunidadeObj = comunidadesCadastradas.find(
        c => c.nome.toLowerCase() === term.toLowerCase()
      );
    }

    if (comunidadeObj) {
      const rota = comunidadeRotas[comunidadeObj.nome.toLowerCase()];
      if (rota) {
        navigate(rota);
      } else {
        navigate(`/comunidades/${encodeURIComponent(comunidadeObj.nome)}`);
      }
    } else if (term !== "" && !term.startsWith("@")) {
      alert("Comunidade não encontrada!");
    }
  };

  return (
    <nav>
      <div className={style.navContainer}>
        <div className={style.navLogo} onClick={home}>
          <img src="/img/logo.png" alt="Logo" />
          <h1 className={style.kailow}>Kailow</h1>
        </div>
        <div className={style.navCategorias}>
          <Link to="/home" className={isActive("/home") ? style.activeCategoria : ""}>Home</Link>
          <Link to="/sobre" className={isActive("/sobre") ? style.activeCategoria : ""}>Sobre</Link>
          <Link to="/comunidades" className={isActive("/comunidades") ? style.activeCategoria : ""}>Comunidades</Link>
          <Link to="/perfil" className={isActive("/perfil") ? style.activeCategoria : ""}>Perfil</Link>
        </div>

        {/* Usa o SearchBar e passa a função de busca */}
        <SearchBar onSearch={handleSearch} />

        <section className={style.navIcons} onClick={Fill}>
          <div className={style.iconConfig}>
            <Icon.Gear style={{ display: isFilled ? "none" : "block", color: "#CDD5DB", height: "4dvh", width: "4dvh", cursor: "pointer" }} onClick={() => setMostrarConfig((prevState) => !prevState)} />
          </div>
          <div className={style.iconConfigFill}>
            <Icon.GearFill style={{ display: isFilled ? "block" : "none", color: "#CDD5DB", height: "4dvh", width: "4dvh", cursor: "pointer" }} onClick={() => setMostrarConfig((prevState) => !prevState)} />
          </div>
          {mostrarConfig && <DropdownHome />}
        </section>
      </div>
    </nav>
  );
}