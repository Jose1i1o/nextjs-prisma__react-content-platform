import { create } from 'zustand';

interface UserStore {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  clearCurrentUser: () => void;
}

interface ModuleStore {
  currentModule: any;
  isLoading?: boolean;
  setCurrentModule: (module: any) => void;
  updateCurrentModule: (module: any) => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  currentUser: null,
  setCurrentUser: (user: any) => set({ currentUser: user }),
  clearCurrentUser: () => set({ currentUser: null })
}));

export const useModuleStore = create<ModuleStore>((set, get) => ({
  currentModule: null,
  isLoading: false,
  setCurrentModule: (module: any) => set({ currentModule: module }),
  updateCurrentModule: async () => {
      set({ isLoading: true });
      try {
        const response = await fetch('/api/modules');
        const newModuleData = await response.json();
        console.log('moduleData updated', newModuleData);
        
        set({ currentModule: newModuleData });
      } catch (error) {
        console.error(error);
      } finally {
        set({ isLoading: false });
      }
  },
  clearModule: () => set({ currentModule: null })
}));