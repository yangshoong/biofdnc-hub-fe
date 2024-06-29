import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getIngredientById } from '../../../shared/api/ingredientApi';
import useIngredientEditStore from '../model/useIngredientEditStore';
import IngredientEditForm from './IngredientEditForm';

const IngredientEditPage = () => {
  const { id } = useParams();
  const { setIngredient } = useIngredientEditStore();

  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const ingredient = await getIngredientById(id);
        setIngredient(ingredient);
      } catch (error) {
        console.error('Failed to fetch ingredient:', error);
        // 에러 처리 로직
      }
    };

    fetchIngredient();
  }, [id, setIngredient]);

  return (
    <div>
      <h1>Edit Ingredient</h1>
      <IngredientEditForm />
    </div>
  );
};

export default IngredientEditPage;