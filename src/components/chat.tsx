import React, { useState } from "react";
import styles from "../style/chat.module.css";

// Função para respostas automáticas do robô de suporte
function normalizeText(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD") // Normaliza acentuação (ex: á → a +  ́)
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .replace(/[.,!?;:(){}\[\]"']/g, "") // Remove pontuação
        .trim(); // Remove espaços no início/fim
}

function getAutoReply(msg: string): string {
    const lower = normalizeText(msg);
    if (lower.includes("curriculo") || lower.includes("cv")) {
        return "Dica: Você pode criar um currículo simples destacando suas habilidades, cursos e experiências, mesmo que sejam projetos pessoais ou voluntariado!";
    }
    if (lower.includes("idade") || lower.includes("menor")) {
        return "Aqui você encontra vagas para jovens a partir de 14 anos, tanto CLT quanto freelancer. Sempre confira os requisitos da vaga!";
    }
    if (lower.includes("freela") || lower.includes("freelancer")) {
        return "Para encontrar vagas de freelancer, acesse a aba 'Vagas' e filtre por tipo de contratação.";
    }
    if (lower.includes("clt")) {
        return "Vagas CLT normalmente exigem documentos como RG, CPF e, em alguns casos, autorização dos responsáveis.";
    }
    if (lower.includes("responsavel") || lower.includes("autorizacao")) {
        return "Algumas empresas podem pedir autorização dos responsáveis para contratação de menores de idade.";
    }
    if (lower.includes("como funciona") || lower.includes("ajuda")) {
        return "Você pode se cadastrar, preencher seu perfil e se candidatar às vagas que mais combinam com você!";
    }
    if (lower.includes("primeiro emprego")) {
        return "Não se preocupe se não tem experiência! Muitas vagas aqui são para o primeiro emprego e valorizam sua vontade de aprender.";
    }
    if (lower.includes("contato") || lower.includes("suporte")) {
        return "Se precisar de ajuda, pode falar comigo por aqui ou enviar um e-mail para suporte@jovememprego.com. Nosso horário de atendimento é das 7:30 às 17h.";
    }
    if (lower.includes("horario") || lower.includes("atendimento")) {
        return "Nosso horário de atendimento é das 7:30 às 17h.";
    }

    // Resposta padrão
    return "Olá! Sou o assistente virtual. Posso te ajudar com dúvidas sobre vagas, cadastro, currículo ou processos seletivos! Nosso horário de atendimento é das 7:30 às 17h.";
}

// Função para verificar se está no horário de atendimento
function isWithinBusinessHours() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    // Horário de atendimento: 7:30 às 17:00
    if (hour < 7 || (hour === 7 && minute < 30)) return false;
    if (hour > 23 || (hour === 23 && minute > 0)) return false;
    return true;
}

type Message = {
    from: "user" | "bot";
    text: string;
    time: string;
};

function getCurrentTimeString() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = () => {
        if (newMessage.trim() === "") return;
        const userMsg: Message = {
            from: "user",
            text: newMessage,
            time: getCurrentTimeString(),
        };
        setMessages((msgs) => [...msgs, userMsg]);
        if (isWithinBusinessHours()) {
            setTimeout(() => {
                setMessages((msgs) => [
                    ...msgs,
                    {
                        from: "bot",
                        text: getAutoReply(newMessage),
                        time: getCurrentTimeString(),
                    },
                ]);
            }, 1000);
        } else {
            setTimeout(() => {
                setMessages((msgs) => [
                    ...msgs,
                    {
                        from: "bot",
                        text: "Olá! Nosso horário de atendimento é das 7:30 às 17h. Por favor, envie sua dúvida nesse período para receber uma resposta automática.",
                        time: getCurrentTimeString(),
                    },
                ]);
            }, 1000);
        }
        setNewMessage("");
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") sendMessage();
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatHeader} onClick={toggleChat}>
                <span>{isOpen ? "Fechar Suporte" : "Suporte ao Cliente"}</span>
            </div>
            {isOpen && (
                <div className={styles.chatBody}>
                    <div className={styles.messagesContainer}>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={
                                    msg.from === "user"
                                        ? styles.messageUser
                                        : styles.messageBot
                                }
                            >
                                <div>{msg.text}</div>
                                <div className={styles.messageTime}>{msg.time}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            className={styles.messageInput}
                            placeholder="Digite sua mensagem..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button className={styles.sendButton} onClick={sendMessage}>
                            Enviar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}