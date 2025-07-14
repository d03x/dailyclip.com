import { create } from "zustand";

type State = {
  isSidebarOpen: boolean;
  isSearchToggle: boolean;
};
type Actions = {
  toggleSearchBar: () => void;
  openSidebarToggle: (input: boolean) => void;
};
const useUiStore = create<State & Actions>((set) => {
  return {
    isSidebarOpen: false,
    isSearchToggle: false,
    toggleSearchBar() {
      set((state) => ({
        isSearchToggle: !state.isSearchToggle,
      }));
    },
    openSidebarToggle: () => {
      set((state) => ({
        isSidebarOpen: !state.isSidebarOpen,
      }));
    },
  };
});
export { useUiStore };
