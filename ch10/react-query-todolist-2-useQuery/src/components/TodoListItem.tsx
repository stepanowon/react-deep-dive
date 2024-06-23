import { TodoType } from "../apis/TodoAPI";

type PropsType = { todoItem: TodoType };

const TodoListItem = ({ todoItem }: PropsType) => {
  return (
    <>
      <li>
        {todoItem.todo} - {todoItem.desc} {todoItem.done ? "(완료)" : ""}
      </li>
    </>
  );
};

export default TodoListItem;
