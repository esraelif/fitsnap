import React from "react";
import { RecipeCategory } from "../types";

interface RecipeCategoryButtonsProps {
  categories: string[];
  onSelectCategory: (category: RecipeCategory) => void;
}

export default function RecipeCategoryButtons({
  categories,
  onSelectCategory,
}: RecipeCategoryButtonsProps) {
  return (
    <div className="flex space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category as RecipeCategory)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
