import React from "react";
import { TodoListItemType } from "./App";
import TodoListItem from "./TodoListItem";

type PropsType = {
  todoList: TodoListItemType[];
};

const TodoList = React.memo(({ todoList }: PropsType) => {
  console.log("## TodoList");
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todoListItem={item} />
      ))}
    </ul>
  );
});

export default TodoList;
