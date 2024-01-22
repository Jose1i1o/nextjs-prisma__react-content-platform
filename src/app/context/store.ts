import { create } from 'zustand';
import { useCategory } from '../hooks/useCategory';
import ObjectId from "bson-objectid";

interface UserStore {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  clearCurrentUser: () => void;
}

interface ModuleStore {
  currentModule: any;
  isLoading?: boolean;
  setCurrentModule: (module: any) => void;
  updateCurrentModule: (category: string | null, userId: string | null | undefined) => void;
  clearCurrentModule: () => void;
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
  updateCurrentModule: async (category, userId ) => {
      set({ isLoading: true });
      try {
        const response = await fetch(`/api/modules?category=${category}&userId=${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const newModuleData = await response.json();
        
        set({ currentModule: newModuleData });
      } catch (error) {
        console.error(error);
      } finally {
        set({ isLoading: false });
      }
  },
  clearCurrentModule: () => set({ currentModule: null })
}));