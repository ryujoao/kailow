import { useState, useEffect, useRef } from "react";
import styles from "../style/acessibilidade.module.css";

interface AcessibilidadeProps {
    onClose?: () => void;
    open?: boolean;
}

export default function Acessibilidade({ onClose, open = true }: AcessibilidadeProps) {
    const [contrast, setContrast] = useState(false);
    const [fontSize, setFontSize] = useState<"small" | "medium" | "large" | "xlarge">("medium");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedContrast = localStorage.getItem("highContrast") === "true";
        const savedFont = localStorage.getItem("fontSize") as typeof fontSize | null;
        if (savedContrast) setContrast(true);
        if (savedFont) setFontSize(savedFont);
    }, []);

    useEffect(() => {
        localStorage.setItem("highContrast", String(contrast));
    }, [contrast]);

    useEffect(() => {
        localStorage.setItem("fontSize", fontSize);
    }, [fontSize]);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                onClose?.();
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [open, onClose]);

    // APLICAR ACESSIBILIDADE NO BODY (NÃO REMOVE AO FECHAR)
    useEffect(() => {
        document.body.classList.remove(
            styles.highContrast,
            styles.fontSmall,
            styles.fontMedium,
            styles.fontLarge,
            styles.fontXlarge
        );
        if (contrast) document.body.classList.add(styles.highContrast);
        if (fontSize === "small") document.body.classList.add(styles.fontSmall);
        if (fontSize === "medium") document.body.classList.add(styles.fontMedium);
        if (fontSize === "large") document.body.classList.add(styles.fontLarge);
        if (fontSize === "xlarge") document.body.classList.add(styles.fontXlarge);
        // Não faz cleanup aqui! As classes só mudam quando o usuário altera.
    }, [contrast, fontSize, styles]);

    function increaseFont() {
        setFontSize((prev) =>
            prev === "small" ? "medium" :
                prev === "medium" ? "large" :
                    prev === "large" ? "xlarge" : "xlarge"
        );
    }
    function decreaseFont() {
        setFontSize((prev) =>
            prev === "xlarge" ? "large" :
                prev === "large" ? "medium" :
                    prev === "medium" ? "small" : "small"
        );
    }
    function resetFont() {
        setFontSize("medium");
    }

    if (!open) return null;

    return (
        <div
            ref={dropdownRef}
            className={`
                ${styles.accessibilityDropdown}
                ${contrast ? styles.highContrast : ""}
                ${fontSize === "small" ? styles.fontSmall : ""}
                ${fontSize === "medium" ? styles.fontMedium : ""}
                ${fontSize === "large" ? styles.fontLarge : ""}
                ${fontSize === "xlarge" ? styles.fontXlarge : ""}
            `}
        >
            <div className={`${styles.dropdownMenu} ${styles.show}`}>
                <div className={styles.dropdownSection}>
                    <span>
                        <i className="fas fa-adjust"></i> Contraste
                    </span>
                    <button
                        className={styles.dropdownButton}
                        onClick={() => setContrast((c) => !c)}
                        aria-label="Alternar contraste alto"
                        type="button"
                    >
                        Alternar Contraste
                    </button>
                </div>
                <div className={styles.dropdownSection}>
                    <span>
                        <i className="fas fa-font"></i> Tamanho da Fonte
                    </span>
                    <div className={styles.fontControls}>
                        <button
                            className={styles.fontButton}
                            onClick={decreaseFont}
                            aria-label="Diminuir tamanho da fonte"
                            type="button"
                        >
                            A-
                        </button>
                        <button
                            className={styles.fontButton}
                            onClick={resetFont}
                            aria-label="Tamanho normal da fonte"
                            type="button"
                        >
                            A
                        </button>
                        <button
                            className={styles.fontButton}
                            onClick={increaseFont}
                            aria-label="Aumentar tamanho da fonte"
                            type="button"
                        >
                            A+
                        </button>
                    </div>
                </div>
                {onClose && (
                    <button
                        className={styles.dropdownButton}
                        onClick={onClose}
                        style={{ marginTop: 10 }}
                        type="button"
                    >
                        Fechar
                    </button>
                )}
            </div>
        </div>
    );
}