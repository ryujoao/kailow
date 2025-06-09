import { useState, useRef } from "react";
import style from '../style/entrarComunidade.module.css';
import Nav from "../components/navbar";
import BotaoComunidade from "../components/bntComunidade";

export default function EntrarComunidade() {
  const [abaAtiva, setAbaAtiva] = useState<"sobre" | "discussao" | "vagas">("sobre");

  return (
    <>
      <Nav />

      <div className={style.mainContainer}>
        {/* Sidebar */}
        <div className={style.sidebar}>
          <div className={style.communityList}>
            <h3>Desenvolvedores Taparoxo</h3>
          </div>

          <div className={style.sidebarMenu}>
            <button className={style.menuItem}>Supermercado KiPago</button>
            <button className={style.menuItem}>Restaurante Seringueira</button>
            <button className={style.menuItem}>Markting Digital Moskou</button>
            <button className={style.menuItem}>Passeio com pets MAX</button>
            <button className={style.menuItem}>Loja de artigos esportivos Inter League</button>
          </div>
        </div>

        {/* Main Content */}
        <div className={style.content}>
          {/* Imagem da Comunidade */}
          <div className={style.communityImageWrapper}>
            <img
              src="../img/desenvolvedores.jpg"
              alt="Comunidade"
              className={style.communityImage}
            />
          </div>
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

            <section className={style.bntComunidadeDiv}>
              <BotaoComunidade />
            </section>

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
                <p>Caso tenha se interessado em algum vaga ou quer nos dar um feedback sobre sua experiência, entre e contato com nooso e-email: <strong>desenvolvedorestaparoxo@gmail.com</strong>.</p>
              </div>
            )}

            {abaAtiva === "discussao" && (
              <div className={style.discussionSection}>
                <h2>Chat da Comunidade</h2>
                <ChatComponent />
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
                  <div className={style.jobCard}>
                    <h3>Engenheiro de Software</h3>
                    <p>Equipe: CodeMasters</p>
                    <p>Localização: Remoto</p>
                    <p>Salário: R$ 9.000</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Componente de chat com mensagens de exemplo e estilização
function ChatComponent() {
  const [messages, setMessages] = useState<
    { id: number; text: string; image?: string; user: string }[]
  >([
    {
      id: 1,
      user: "Ana",
      text: "Adorei trabalhar no projeto do supermercado! Aprendi muito sobre integração de APIs.",
      image: undefined,
    },
    {
      id: 2,
      user: "Carlos",
      text: "O desafio do app mobile foi grande, mas a equipe colaborou bastante.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=200&h=200",
    },
    {
      id: 3,
      user: "Juliana",
      text: "Fiquei responsável pelo front-end do restaurante. Foi ótimo usar React!",
      image: undefined,
    },
  ]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [image, setImage] = useState<string | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Simulando usuário logado como "Você"
  const currentUser = "Você";

  const handleSend = () => {
    if (input.trim() || image) {
      if (editId !== null) {
        setMessages((msgs) =>
          msgs.map((msg) =>
            msg.id === editId
              ? { ...msg, text: input, image, user: currentUser }
              : msg
          )
        );
        setEditId(null);
      } else {
        setMessages((msgs) => [
          ...msgs,
          {
            id: Date.now(),
            text: input,
            image,
            user: currentUser,
          },
        ]);
      }
      setInput("");
      setImage(undefined);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleEdit = (id: number) => {
    const msg = messages.find((m) => m.id === id);
    if (msg && msg.user === currentUser) {
      setInput(msg.text);
      setImage(msg.image);
      setEditId(id);
    }
  };

  const handleDelete = (id: number) => {
    const msg = messages.find((m) => m.id === id);
    if (msg && msg.user === currentUser) {
      setMessages((msgs) => msgs.filter((msg) => msg.id !== id));
      if (editId === id) {
        setEditId(null);
        setInput("");
        setImage(undefined);
      }
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={style.chatContainer}>
      <div className={style.chatMessages}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${style.chatMessage} ${msg.user === currentUser ? style.myMessage : ""}`}
          >
            <div className={style.chatHeader}>
              <strong>{msg.user}</strong>
            </div>
            {msg.image && (
              <img
                src={msg.image}
                alt="enviada"
                className={style.chatImg}
              />
            )}
            <span>{msg.text}</span>
            {msg.user === currentUser && (
              <div className={style.chatActions}>
                <button onClick={() => handleEdit(msg.id)} style={{ marginRight: 4 }}>
                  Editar
                </button>
                <button onClick={() => handleDelete(msg.id)}>Apagar</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={style.chatInputArea}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua experiência..."
          rows={2}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        {image && (
          <div>
            <img src={image} alt="preview" className={style.chatPreviewImg} />
            <button type="button" onClick={() => setImage(undefined)}>Remover imagem</button>
          </div>
        )}
        <button type="button" onClick={handleSend}>
          {editId !== null ? "Salvar edição" : "Enviar"}
        </button>
      </div>
    </div>
  );
}