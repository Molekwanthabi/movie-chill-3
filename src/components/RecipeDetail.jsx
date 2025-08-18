import React from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Link */}
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      {/* Recipe Title */}
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-6"
      />

      {/* Ingredients */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
