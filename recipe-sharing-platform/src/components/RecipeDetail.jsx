import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json"; // Make sure this file exists in src/

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from data.json
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id, 10)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <Link to="/" className="text-green-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      {recipe.ingredients && (
        <>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}

      {recipe.instructions && (
        <>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
