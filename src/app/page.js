"use client";
import { useState, useMemo } from 'react';
import recipesData from '@/data/recipes.json';
import styles from './page.module.css';

import SearchBar from './components/searchbar/SearchBar';
import FilterBar from './components/filterbar/FilterBar';
import RecipeList from './components/RecipeList/RecipeList';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(recipesData.map(r => r.category))];
  }, []);

  const filteredRecipes = recipesData.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || recipe.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Recipe Book</h1>
      </header>

      <main className={styles.main}>
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />

        <FilterBar 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <RecipeList recipes={filteredRecipes} />
        
        {filteredRecipes.length === 0 && (
          <p className={styles.noResult}>Aucune recette ne correspond à votre recherche.</p>
        )}
      </main>
    </div>
  );
}