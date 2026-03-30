"use client";
import { useState } from "react";

export default function RecipeCard({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    if (typeof window === "undefined") return false; 
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    return saved.includes(recipe.id);
  });

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");

    let newFavorites;
    if (isFavorite) {
      newFavorites = saved.filter((id) => id !== recipe.id);
    } else {
      newFavorites = [...saved, recipe.id];
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <article>
      <h2>{recipe.name}</h2>
      <button onClick={toggleFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </article>
  );
}