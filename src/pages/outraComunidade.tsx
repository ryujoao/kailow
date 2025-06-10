import { useState, useRef, use } from "react";
import style from '../style/entrarComunidade.module.css';
import Nav from "../components/navbar";
import BotaoComunidade from "../components/btnComunidade";
import { useNavigate } from "react-router-dom";

export default function EntrarComunidade() {
  const [abaAtiva, setAbaAtiva] = useState<"sobre" | "discussao" | "vagas">("sobre");
  const navigate = useNavigate();

  return (
    <>
      <Nav />

      <div className={style.mainContainer}>
        {/* Sidebar */}
        <div className={style.sidebar}>
          <div className={style.communityList}>
            <h3>Restaurante Seringueira</h3>
          </div>

          <div className={style.sidebarMenu}>
            <button onClick={ () => navigate("/entrarComunidade") } className={style.menuItem}>Desenvolvedores Taparoxo</button>
            <button className={style.menuItem}>Supermercado KiPago</button>
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
              src="../img/restaurante.jpg"
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

            <section className={style.btnComunidadeDiv}>
              <BotaoComunidade />
            </section>

          </div>

          <div className={style.tabContent}>
            {abaAtiva === "sobre" && (
              <div className={style.aboutSection}>
                <h2>Sobre Nós</h2>
                <p>
                  O <strong>Seringueira</strong> é mais do que um restaurante, <strong>é um espaço onde a gastronomia se conecta com a natureza, a cultura e as pessoas</strong>. Inspirado na força e simbolismo da árvore seringueira, buscamos oferecer experiências autênticas, acolhedoras e cheias de sabor.
                </p>
                <p>
                  Nosso compromisso vai além da <strong>boa comida</strong>. Valorizamos um ambiente de trabalho respeitoso, colaborativo e em constante crescimento. Aqui, cada membro da equipe é <strong>parte essencial</strong> da nossa história, seja na cozinha, no atendimento ou na gestão.
                </p>
                <p>
                  Se você é apaixonado por gastronomia, gosta de trabalhar em equipe e quer crescer em um ambiente que valoriza pessoas e talentos, o Seringueira pode ser o lugar ideal para você.
                </p>
                <p>Venha fazer parte da nossa equipe e ajude a construir uma experiência única para todos que passam por aqui, entre em contato com nosso e-email: <strong>restauranteseringueira@gmail.com</strong>.</p>
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
                    <h3>Benefícios (para todas as vagas):</h3>
                    <p>Refeição no local</p>
                    <p>Vale-transporte</p>
                    <p>Bonificação por desempenho (após 3 meses)</p>
                    <p>Oportunidade de crescimento interno</p>
                  </div>
                  <div className={style.jobCard}>
                    <h3>Garçom/Garçonete</h3>
                    <p>Carga horária: 44 horas semanais (escala 6x1 – com 1 folga semanal)</p>
                    <p>Requisitos: Boa comunicação, simpatia, experiência com atendimento ao cliente é um diferencial.</p>
                    <p>Salário: R$ 1.800,00 + gorjetas</p>
                  </div>
                  <div className={style.jobCard}>
                    <h3>Cozinheiro(a)</h3>
                    <p>Carga horária: 44 horas semanais (escala 6x1)</p>
                    <p>Requisitos: Experiência em cozinha quente, preparo de pratos à la carte e controle de insumos.</p>
                    <p>Salário: R$ 2.500,00</p>
                  </div>
                  <div className={style.jobCard}>
                    <h3>Auxiliar de Limpeza</h3>
                    <p>Carga horária: 44 horas semanais (escala 6x1)</p>
                    <p>Requisitos: Comprometimento, responsabilidade e atenção aos detalhes.</p>
                    <p>Salário: R$ 1.500,00</p>
                  </div>
                  <div className={style.jobCard}>
                    <h3>Recepcionista/Anfitrião(ã)</h3>
                    <p>Carga horária: 44 horas semanais</p>
                    <p>Requisitos: Boa comunicação, simpatia, experiência com atendimento ao público.</p>
                    <p>Salário: R$ 1.900,00</p>
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
      user: "Sérgio",
      text: "Restaurante top! Muito boa a infraestrutura do lugar.",
      image: undefined,
    },
    {
      id: 2,
      user: "Gilberto",
      text: "O prato do ano!",
      image: "https://i.pinimg.com/736x/c0/de/ed/c0deed8625f95b662d4db597b41f8a6b.jpg",
    },
    {
      id: 3,
      user: "Robertinho",
      text: "Pessoal muito simpático e acolhedor",
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