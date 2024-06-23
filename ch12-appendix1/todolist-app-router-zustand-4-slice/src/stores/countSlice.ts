import { StateCreator } from "zustand";
import { CountSliceType, TodoSliceType } from ".";

export const countSlice: StateCreator<CountSliceType & TodoSliceType, [], [], CountSliceType> = (set) => ({
  count: 0,
  increment: () => {
    set((state) => {
      return { count: state.count + 1 };
    });
  },
});
