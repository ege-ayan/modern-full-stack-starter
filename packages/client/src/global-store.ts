import { createStore } from "zustand";

export const globalStore = createStore((set) => ({
  message: "",
  setMessage: (message: string) => set({ message }),
}));
