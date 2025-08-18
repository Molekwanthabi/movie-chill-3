import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm onAddRecipe={handleAddRecipe} />
                <HomePage recipes={recipes} />
              </div>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
