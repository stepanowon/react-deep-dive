import { useState } from "react";
import App from "./components/App";
import { produce } from "immer";

export interface ITodoItem {
  no: number;
  todo: string;
  done: boolean;
}

const AppContainer = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    { no: 1, todo: "React학습1", done: false },
    { no: 2, todo: "React학습2", done: false },
    { no: 3, todo: "React학습3", done: true },
    { no: 4, todo: "React학습4", done: false },
  ]);

  const addTodo = (todo: string) => {
    const newTodoList = produce(todoList, (draft) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    const newTodoList = todoList.filter((item) => item.no !== no);
    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    const index = todoList.findIndex((item) => item.no === no);
    const newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  return <App todoList={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
};

export default AppContainer;
