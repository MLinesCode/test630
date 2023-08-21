// import { useState } from 'react';
import SearchIcon from "../assets/search.svg"
// import ShareIcon from "../assets/share.svg"
import styles from './SearchInput.module.css'

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = () => {

  return (
    <div>
      <input
        className={styles.container}
        type="text"
        placeholder="Buscar"
      />
      <button className="search-button">
        <img src={SearchIcon} alt="Buscar" />
      </button>
    </div>
  );
};

export default SearchInput;
