import React from "react";
import Image from "next/image";
import { Recipe } from "../types";

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes.map((recipe, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md">
          <div className="relative w-full h-40">
            <Image
              src={recipe.image}
              alt={recipe.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h2 className="text-xl font-bold mt-2">{recipe.name}</h2>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
          <p>
            <strong>Calories:</strong> {recipe.calories}
          </p>
          <p>
            <strong>Time:</strong> {recipe.time}
          </p>
          <p>
            <strong>Instructions:</strong> {recipe.instructions}
          </p>
        </div>
      ))}
    </div>
  );
}
