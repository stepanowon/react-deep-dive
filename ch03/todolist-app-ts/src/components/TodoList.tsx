import { ITodoItem } from "../AppContainer";
import TodoListItem from "./TodoListItem";

type TodoListType = {
  todoList: ITodoItem[];
  deleteTodo: (no: number) => void;
  toggleDone: (no: number) => void;
};

const TodoList = ({ todoList, deleteTodo, toggleDone }: TodoListType) => {
  const items = todoList.map((item) => {
    return <TodoListItem key={item.no} todoItem={item} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
  });

  return (
    <div className="row">
      {" "}
      <div className="col">
        <ul className="list-group">{items}</ul>
      </div>
    </div>
  );
};

export default TodoList;
