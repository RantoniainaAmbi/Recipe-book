"use client";

import styles from './SearchBar.module.css';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Rechercher une recette (ex: Carbonara...)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}