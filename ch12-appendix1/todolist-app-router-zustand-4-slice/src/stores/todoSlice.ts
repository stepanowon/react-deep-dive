import { StateCreator } from "zustand";
import { CountSliceType, TodoSliceType } from ".";
import { produce } from "immer";

export const todoSlice: StateCreator<CountSliceType & TodoSliceType, [], [], TodoSliceType> = (set) => ({
  todoList: [
    { id: 1, todo: "ES6학습", desc: "설명1", done: false },
    { id: 2, todo: "React학습", desc: "설명2", done: false },
    { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
    { id: 4, todo: "야구경기 관람", desc: "설명4", done: false },
  ],
  addTodo: ({ todo, desc }) => {
    set((state) => {
      const newTodoList = produce(state.todoList, (draft) => {
        draft.push({ id: new Date().getTime(), todo, desc, done: false });
      });
      return { todoList: newTodoList };
    });
  },
  deleteTodo: ({ id }) => {
    set((state) => {
      const index = state.todoList.findIndex((item) => item.id === id);
      const newTodoList = produce(state.todoList, (draft) => {
        draft.splice(index, 1);
      });
      return { todoList: newTodoList };
    });
  },
  toggleDone: ({ id }) => {
    set((state) => {
      const index = state.todoList.findIndex((item) => item.id === id);
      const newTodoList = produce(state.todoList, (draft) => {
        draft[index].done = !draft[index].done;
      });
      return { todoList: newTodoList };
    });
  },
  updateTodo: ({ id, todo, desc, done }) => {
    set((state) => {
      const index = state.todoList.findIndex((item) => item.id === id);
      const newTodoList = produce(state.todoList, (draft) => {
        draft[index] = { id, todo, desc, done };
      });
      return { todoList: newTodoList };
    });
  },
});
