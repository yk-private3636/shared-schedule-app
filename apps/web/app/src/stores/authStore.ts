import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { AuthStatus, AuthStore } from "@/types/store/auth";

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      status: "INITIAL",
      setStatus: (value: AuthStatus) => set({ status: value }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state) => {
        const json = localStorage.getItem("auth-storage");

        if (json === null) {
          state.status = "INITIAL";
          return;
        }

        try {
          const store = JSON.parse(json);
          state.status = store.state.status;
        } catch (_error) {
          state.status = "INITIAL";
        }
      },
    },
  ),
);
