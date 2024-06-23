import React from "react";
import { TodoListItemType } from "./App";
import TodoListItemBody from "./TodoListItemBody";
import TodoListItemDelete from "./TodoListItemDelete";

type PropsType = {
  todoListItem: TodoListItemType;
  deleteTodo: (id: number) => void;
};

const TodoListItem = React.memo(({ todoListItem, deleteTodo }: PropsType) => {
  console.log("## TodoListItem");
  return (
    <li>
      <TodoListItemBody todoListItem={todoListItem} />
      &nbsp;&nbsp;&nbsp;
      <TodoListItemDelete deleteTodo={deleteTodo} id={todoListItem.id} />
    </li>
  );
});

export default TodoListItem;
