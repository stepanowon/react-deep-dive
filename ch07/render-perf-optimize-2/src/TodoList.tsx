import React from "react";
import { TodoListItemType } from "./App";
import TodoListItem from "./TodoListItem";

type PropsType = {
  todoList: TodoListItemType[];
  deleteTodo: (id: number) => void;
};

const TodoList = React.memo(({ todoList, deleteTodo }: PropsType) => {
  console.log("## TodoList");
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todoListItem={item} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
});

export default TodoList;
