import { create } from 'zustand';

interface UserStore {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  clearCurrentUser: () => void;
}

interface ModuleStore {
  currentModule: any;
  setCurrentModule: (module: any) => void;
  updateCurrentModule: (module: any) => void;
  clearModule: () => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  currentUser: null,
  setCurrentUser: (user: any) => set({ currentUser: user }),
  clearCurrentUser: () => set({ currentUser: null })
}));


















export const useModuleStore = create<ModuleStore>((set, get) => ({
  currentModule: null,
  setCurrentModule: (module: any) => set({ currentModule: module }),
  updateCurrentModule: async () => {
    console.log('updating module');
    
    try {
      const response = await (fetch('/api/modules'));
      const newModuleData = await response.json();      
      set({ currentModule: newModuleData });
    } catch (error) {
      console.error(error);
    }
  },
  clearModule: () => set({ currentModule: null })
}));