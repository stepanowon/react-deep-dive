import { create } from "zustand";

interface StateType {
  count: number;
  increment: () => void;
}

export const useCountStore = create<StateType>()((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
}));
