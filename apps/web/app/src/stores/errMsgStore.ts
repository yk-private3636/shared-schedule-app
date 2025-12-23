import { create } from "zustand";
import type { MsgStore } from "@/types/store/msg";

export const useErrMsgStore = create<MsgStore>()((set) => ({
  value: {
    show: false,
    msg: "",
  },
  setValue: (value: { show: boolean; msg: string }) => set(() => ({ value })),
}));
