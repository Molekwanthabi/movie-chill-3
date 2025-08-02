import { useRecipeStore } from '../recipeStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;