import { create } from 'zustand';
import getCurrentUser from '../actions/getCurrentUser';

interface UserStore {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  clearCurrentUser: () => void;
  fetchCurrentUser: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  currentUser: null,
  setCurrentUser: (user: any) => set({ currentUser: user }),
  fetchCurrentUser: async () => {
    const response = await getCurrentUser();
    if (response) {
      set({ currentUser: response });
    }
  },
  clearCurrentUser: () => set({ currentUser: null })
}));

