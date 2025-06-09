// components/SearchBar.tsx
import { useState } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
