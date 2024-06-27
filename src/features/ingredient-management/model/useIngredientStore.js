import create from 'zustand';

const useIngredientStore = create((set) => ({
  filters: {
    inciName: '',
    koreanName: '',
    casNo: '',
    manufacturer: '',
    origin: '',
    extractionPart: '',
    derivedPart: '',
    callusOrigin: '',
    efficacy: '',
    etc: '',
  },
  setFilter: (key, value) => set((state) => ({
    filters: {
      ...state.filters,
      [key]: value,
    },
  })),
}));

export default useIngredientStore;