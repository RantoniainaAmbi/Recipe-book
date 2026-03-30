"use client";

import styles from './FilterBar.module.css';


export default function FilterBar({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className={styles.filterContainer}>

      {categories.map(cat => (
        <button 
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={activeCategory === cat ? styles.activeFilter : styles.filterBtn}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}