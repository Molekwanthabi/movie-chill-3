import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json"; // Make sure data.json is inside src/

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from data.json when component mounts
    setRecipes(recipesData);
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe List</h1>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.summary}</p>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No recipes available.</p>
      )}
    </div>
  );
};

export default HomePage;
