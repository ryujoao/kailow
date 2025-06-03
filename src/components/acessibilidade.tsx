import { useState, useEffect, useRef } from "react";
import styles from "../style/acessibilidade.module.css";

export default function Acessibilidade() {
    const [open, setOpen] = useState(false);
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
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [open]);

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
            {/* <button
                className={styles.accessibilityToggle}
                aria-label="Menu de acessibilidade"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                type="button"
            >
                <i className="fas fa-universal-access"></i> Acessibilidade
            </button> */}
            <div className={`${styles.dropdownMenu} ${open ? styles.show : ""}`}>
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
            </div>
        </div>
    );
}