import { useNavigate } from 'react-router-dom';

function useIngredientNavigation() {
  const navigate = useNavigate();

  const navigateToIngredientEdit = (inciName) => {
    navigate(`/ingredient-edit/${inciName}`);
  };

  return { navigateToIngredientEdit };
}

export default useIngredientNavigation;