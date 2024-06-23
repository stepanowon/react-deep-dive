import React from "react";
import { TodoListItemType } from "./App";

type PropsType = {
  todoListItem: TodoListItemType;
};

const TodoListItemBody = React.memo(({ todoListItem }: PropsType) => {
  console.log("## TodoListItemBody");
  return <span>{todoListItem.todo}</span>;
});

export default TodoListItemBody;
