import { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.module.css'; // Arquivo de estilos CSS modules

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  delay?: number; // Atraso para debounce em ms
}

const SearchBar = ({ onSearch, placeholder = "Pesquisar...", delay = 300 }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Debounce para evitar muitas chamadas durante a digitação
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query !== '') {
        onSearch(query);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [query, delay, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div className={`${styles.searchContainer} ${isFocused ? styles.focused : ''}`}>
      <div className={styles.searchIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
      
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={styles.searchInput}
        aria-label="Barra de pesquisa"
      />
      
      {query && (
        <button 
          onClick={handleClear} 
          className={styles.clearButton}
          aria-label="Limpar pesquisa"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;