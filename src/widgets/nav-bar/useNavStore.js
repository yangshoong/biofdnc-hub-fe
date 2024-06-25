import create from 'zustand';

const useNavStore = create((set) => ({
  anchorEl: null,
  menuItems: [],
  setAnchorEl: (anchorEl) => set({ anchorEl }),
  setMenuItems: (menuItems) => set({ menuItems }),
  handleClose: () => set({ anchorEl: null, menuItems: [] }),
}));

export default useNavStore;