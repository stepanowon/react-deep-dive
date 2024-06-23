import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

export type TodoItemType = { id: number; todo: string; desc: string; done: boolean };

//상태 데이터와 액션의 타입 선언
type TodoStateType = {
  todoList: TodoItemType[];
};
type TodoActionType = {
  addTodo: ({ todo, desc }: { todo: string; desc: string }) => void;
  deleteTodo: ({ id }: { id: number }) => void;
  toggleDone: ({ id }: { id: number }) => void;
  updateTodo: ({ id, todo, desc, done }: { id: number; todo: string; desc: string; done: boolean }) => void;
};

const useTodoStore = create<TodoStateType & TodoActionType>()(
  devtools(
    immer((set) => ({
      todoList: [
        { id: 1, todo: "ES6학습", desc: "설명1", done: false },
        { id: 2, todo: "React학습", desc: "설명2", done: false },
        { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
        { id: 4, todo: "야구경기 관람", desc: "설명4", done: false },
      ],
      addTodo: ({ todo, desc }) => {
        set((state) => {
          state.todoList.push({ id: new Date().getTime(), todo, desc, done: false });
        });
      },
      deleteTodo: ({ id }) => {
        set((state) => {
          const index = state.todoList.findIndex((item) => item.id === id);
          state.todoList.splice(index, 1);
        });
      },
      toggleDone: ({ id }) => {
        set((state) => {
          const index = state.todoList.findIndex((item) => item.id === id);
          state.todoList[index].done = !state.todoList[index].done;
        });
      },
      updateTodo: ({ id, todo, desc, done }) => {
        set((state) => {
          const index = state.todoList.findIndex((item) => item.id === id);
          state.todoList[index] = { id, todo, desc, done };
        });
      },
    }))
  )
);

export default useTodoStore;
