import React, { useState } from "react";
import styles from "../style/chat.module.css";
import * as Icon from "react-bootstrap-icons";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ [user: string]: string[] }>({});
  const [newMessage, setNewMessage] = useState("");

  // Lista de usuários com ícones
  const users = [
    { name: "Antônio", icon: "👨‍💻" },
    { name: "Maria Angela", icon: "👩‍💼" },
    { name: "Isa Emi", icon: "👩‍🎨" },
    { name: "Ryu", icon: "👨‍🔧" },
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const selectUser = (user: string) => {
    setSelectedUser(user);
    if (!messages[user]) {
      setMessages({ ...messages, [user]: [] });
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "" && selectedUser) {
      setMessages({
        ...messages,
        [selectedUser]: [...(messages[selectedUser] || []), newMessage],
      });
      setNewMessage("");
    }
  };

  const deleteMessage = (index: number) => {
    if (selectedUser) {
      const updatedMessages = [...(messages[selectedUser] || [])];
      updatedMessages.splice(index, 1);
      setMessages({ ...messages, [selectedUser]: updatedMessages });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Botão para abrir/fechar o chat */}
      <div className={styles.chatHeader} onClick={toggleChat}>
        <span>{isOpen ? "Fechar Chat" : "Abrir Chat"}</span>
      </div>

      {/* Corpo do chat */}
      {isOpen && (
        <div className={styles.chatBody}>
          {/* Lista de usuários */}
          {!selectedUser && (
            <div className={styles.userList}>
              <h4>Contatos:</h4>
              {users.map((user) => (
                <div
                  key={user.name}
                  className={styles.user}
                  onClick={() => selectUser(user.name)}
                >
                  <span className={styles.userIcon}>{user.icon}</span>
                  {user.name}
                </div>
              ))}
            </div>
          )}

          {/* Conversa com o usuário selecionado */}
          {selectedUser && (
            <>
              <div className={styles.chatHeader}>
                {/* Botão de voltar para usuários */}
                <div
                  className={styles.backButton}
                  onClick={() => setSelectedUser(null)}
                >
                  ← Voltar para usuários
                </div>
              </div>

              {/* Indicativo de conversa */}
              <div className={styles.conversationHeader}>
                <span className={styles.userIcon}>
                  {users.find((user) => user.name === selectedUser)?.icon}
                </span>
                <h4>{selectedUser}</h4>
              </div>

              <div className={styles.messagesContainer}>
                {messages[selectedUser]?.length > 0 ? (
                  messages[selectedUser].map((msg, index) => (
                    <div key={index} className={styles.message}>
                      {msg}
                      <button
                        className={styles.deleteButton}
                        onClick={() => deleteMessage(index)}
                      >
                        <Icon.Trash className={styles.trashIcon} />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className={styles.noMessages}>Nenhuma mensagem ainda.</p>
                )}
              </div>

              {/* Campo de envio de mensagem */}
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  className={styles.messageInput}
                  placeholder="Digite sua mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress} // Adicionado para capturar a tecla Enter
                />
                <button className={styles.sendButton} onClick={sendMessage}>
                  Enviar
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}