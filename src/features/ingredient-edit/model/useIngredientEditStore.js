import create from 'zustand';
import { updateIngredient } from '../../../shared/api/ingredientApi';

const useIngredientEditStore = create((set) => ({
  ingredient: null,
  setIngredient: (ingredient) => set({ ingredient }),
  updateField: (field, value) => set((state) => ({
    ingredient: { ...state.ingredient, [field]: value }
  })),
  saveIngredient: async () => {
    const { ingredient } = useIngredientEditStore.getState();
    try {
      await updateIngredient(ingredient);
      // 성공 메시지 또는 리다이렉션 로직
    } catch (error) {
      console.error('Failed to update ingredient:', error);
      // 에러 처리 로직
    }
  },
}));

export default useIngredientEditStore;