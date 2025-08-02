import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

function App() {
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

    useEffect(() => {
      filterRecipes();
    }, [filterRecipes]);
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/recommendations">Recommendations</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/delete/:recipeId" element={<DeleteRecipeButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
