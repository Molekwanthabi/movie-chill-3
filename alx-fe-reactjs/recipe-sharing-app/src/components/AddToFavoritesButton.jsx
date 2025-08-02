import { useRecipeStore } from '../recipeStore';

const AddToFavoritesButton = ({ recipeId }) => {
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  const isFavorite = favorites.includes(recipeId);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button onClick={handleFavoriteClick}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavoritesButton;