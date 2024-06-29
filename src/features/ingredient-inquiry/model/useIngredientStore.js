import create from 'zustand';
import { ingredients } from '../api/ingredients';

const useIngredientStore = create((set, get) => ({
  ingredients: ingredients,
  filteredIngredients: ingredients,
  filters: {},
  page: 1,
  itemsPerPage: 5, // Changed to 5

  setFilter: (key, value) => set((state) => {
    const newFilters = { ...state.filters, [key]: value };
    const filtered = state.ingredients.filter((ingredient) =>
      Object.entries(newFilters).every(([k, v]) => 
        !v || (ingredient[k] && ingredient[k].toLowerCase().includes(v.toLowerCase()))
      )
    );
    return { filters: newFilters, filteredIngredients: filtered, page: 1 };
  }),

  setPage: (page) => set({ page }),

  resetFilters: () => set((state) => ({
    filters: {},
    filteredIngredients: state.ingredients,
    page: 1
  })),
}));

export default useIngredientStore;
