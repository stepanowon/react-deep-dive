import { TodoListItemType } from "./App";

type PropsType = {
  todoListItem: TodoListItemType;
};

const TodoListItem = ({ todoListItem }: PropsType) => {
  console.log("## TodoListItem");
  return <li>{todoListItem.todo}</li>;
};

export default TodoListItem;
