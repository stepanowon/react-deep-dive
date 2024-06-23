import { create } from "zustand";
import { countSlice } from "./countSlice";
import { todoSlice } from "./todoSlice";
import { initializeSlice } from "./initializeSlice";
import { devtools } from "zustand/middleware";

export type TodoItemType = { id: number; todo: string; desc: string; done: boolean };

export type TodoSliceType = {
  todoList: TodoItemType[];
  addTodo: ({ todo, desc }: { todo: string; desc: string }) => void;
  deleteTodo: ({ id }: { id: number }) => void;
  toggleDone: ({ id }: { id: number }) => void;
  updateTodo: ({ id, todo, desc, done }: { id: number; todo: string; desc: string; done: boolean }) => void;
};

export type CountSliceType = {
  count: number;
  increment: () => void;
};

export type InitializeSliceType = {
  initialize: () => void;
  getAllStates: () => { count: number; todoList: TodoItemType[] };
};

export const useBoundStore = create<TodoSliceType & CountSliceType & InitializeSliceType>()(
  devtools((...a) => ({
    ...countSlice(...a),
    ...todoSlice(...a),
    ...initializeSlice(...a),
  }))
);
