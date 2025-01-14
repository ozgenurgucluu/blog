import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: undefined,
  setUser: (user) => set((state) => ({ ...state, user })),
}));
