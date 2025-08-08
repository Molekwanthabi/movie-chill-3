import { useRecipeStore } from '../recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import AddToFavoritesButton from './AddToFavoritesButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <AddToFavoritesButton recipeId={recipe.id} />
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;