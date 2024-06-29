import { ingredients } from '../../features/ingredient-inquiry/api/ingredients';

export const getIngredientById = (id) => {
  return Promise.resolve(ingredients.find(ingredient => ingredient.inciName === id));
};

export const updateIngredient = (updatedIngredient) => {
  const index = ingredients.findIndex(ingredient => ingredient.inciName === updatedIngredient.inciName);
  if (index !== -1) {
    ingredients[index] = updatedIngredient;
    return Promise.resolve(updatedIngredient);
  }
  return Promise.reject(new Error('Ingredient not found'));
};