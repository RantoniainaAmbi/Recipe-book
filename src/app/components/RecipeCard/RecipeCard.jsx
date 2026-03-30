"use client"; 

import { useState } from 'react';
import Image from 'next/image'; 
import styles from './RecipeCard.module.css';

export default function RecipeCard({ recipe }) {
  const [pinned, setPinned] = useState(false);

  return (
    <article className={`${styles.card} ${pinned ? styles.pinned : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={400} 
          height={250}
          className={styles.image}
          priority={false} 
        />
      </div>

      <div className={styles.body}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <span className={styles.badge}>{recipe.category}</span>
        <p className={styles.duration}>{recipe.duration} min</p>
        
        <button
          type="button"
          className={styles.pin}
          onClick={() => setPinned((p) => !p)}
        >
          {pinned ? 'Unpin' : 'Pin'}
        </button>
      </div>
    </article>
  );
}