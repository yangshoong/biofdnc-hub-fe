import create from 'zustand';

const useProductStore = create((set) => ({
  filters: {
    number: '',
    name: '',
    shortName: '',
    structure: '',
    purchaseGroup: '',
  },
  setFilter: (field, value) => set((state) => ({
    filters: {
      ...state.filters,
      [field]: value,
    },
  })),
}));

export default useProductStore;