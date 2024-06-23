import React, { useState } from "react";
import App from "./components/App";
import { produce } from "immer";

const AppContainer = () => {
  const [todoList, setTodoList] = useState([
    { no: 1, todo: "React학습1", done: false },
    { no: 2, todo: "React학습2", done: false },
    { no: 3, todo: "React학습3", done: true },
    { no: 4, todo: "React학습4", done: false },
  ]);

  const addTodo = (todo) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no) => {
    let newTodoList = todoList.filter((item) => item.no !== no);
    setTodoList(newTodoList);
  };

  const toggleDone = (no) => {
    let index = todoList.findIndex((item) => item.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  return (
    <App
      todoList={todoList}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleDone={toggleDone}
    />
  );
};

export default AppContainer;
