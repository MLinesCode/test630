import React, { useState } from 'react';
import SearchIcon from "../assets/search.svg"
import ShareIcon from "../assets/share.svg"

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <img src={SearchIcon} alt="Buscar" />
      </button>
      {query && (
        <button className="clear-button" onClick={handleClear}>
          <img src={ShareIcon} alt="Limpiar" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
