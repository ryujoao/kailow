import { useState, useEffect, useRef } from "react";
import styles from "../style/acessibilidade.module.css";

interface AcessibilidadeProps {
    onClose?: () => void;
    open?: boolean;
}

const fontSizes = ["small", "medium", "normal",  "large", "xlarge"] as const;
type FontSize = typeof fontSizes[number];

export default function Acessibilidade({ onClose, open = true }: AcessibilidadeProps) {
    const [contrast, setContrast] = useState(false);
    const [fontSize, setFontSize] = useState<FontSize>("normal");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Carrega preferências salvas
    useEffect(() => {
        const savedContrast = localStorage.getItem("highContrast") === "true";
        const savedFont = localStorage.getItem("fontSize") as FontSize | null;
        if (savedContrast) setContrast(true);
        if (savedFont && fontSizes.includes(savedFont)) setFontSize(savedFont);
    }, []);

    // Salva alterações no localStorage
    useEffect(() => {
        localStorage.setItem("highContrast", String(contrast));
    }, [contrast]);

    useEffect(() => {
        localStorage.setItem("fontSize", fontSize);
    }, [fontSize]);

    // Fecha dropdown ao clicar fora
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose?.();
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClick);
        }
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open, onClose]);

    // Aplica estilos de acessibilidade no <body>
    useEffect(() => {
        const body = document.body;
        body.classList.remove(
            styles.highContrast,
            styles.fontNormal,
            styles.fontSmall,
            styles.fontMedium,
            styles.fontLarge,
            styles.fontXlarge
        );

        if (contrast) body.classList.add(styles.highContrast);
        body.classList.add(styles[`font${capitalize(fontSize)}` as keyof typeof styles]);
    }, [contrast, fontSize]);

    function increaseFont() {
        const index = fontSizes.indexOf(fontSize);
        if (index < fontSizes.length - 1) setFontSize(fontSizes[index + 1]);
    }

    function decreaseFont() {
        const index = fontSizes.indexOf(fontSize);
        if (index > 0) setFontSize(fontSizes[index - 1]);
    }

    function resetFont() {
        setFontSize("normal");
    }

    function capitalize(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    if (!open) return null;

    return (
        <div
            ref={dropdownRef}
            className={`
                ${styles.accessibilityDropdown}
                ${contrast ? styles.highContrast : ""}
                ${styles[`font${capitalize(fontSize)}`]}
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
