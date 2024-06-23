import { StateCreator } from "zustand";
import { CountSliceType, InitializeSliceType, TodoSliceType } from ".";

export const initializeSlice: StateCreator<TodoSliceType & CountSliceType, [], [], InitializeSliceType> = (set, get) => ({
  initialize: () => {
    set(() => {
      return { count: 0, todoList: [] };
    });
  },
  getAllStates: () => {
    return { count: get().count, todoList: get().todoList };
  },
});
