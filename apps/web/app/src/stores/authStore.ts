import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { AuthStore } from "@/types/store/auth";

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state) => {
        const json = localStorage.getItem("auth-storage");

        if (json === null) {
          state.isAuthenticated = false;
          return;
        }

        try {
          const store = JSON.parse(json);
          state.isAuthenticated = store.state.isAuthenticated;
        } catch (_error) {
          state.isAuthenticated = false;
        }
      },
    },
  ),
);
