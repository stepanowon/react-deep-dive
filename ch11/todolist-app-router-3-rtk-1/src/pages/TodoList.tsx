import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { TodoItemType } from "../redux/TodoReducer";
import TodoActionCreator from "../redux/TodoActionCreator";

type PropsType = {
  todoList: TodoItemType[];
  deleteTodo: ({ id }: { id: number }) => void;
  toggleDone: ({ id }: { id: number }) => void;
};

const TodoList = ({ todoList, deleteTodo, toggleDone }: PropsType) => {
  const todoItems = todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
  });
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: { todoList: TodoItemType[] }) => state.todoList);
  const toggleDone = (args: { id: number }) => dispatch(TodoActionCreator.toggleDone(args));
  const deleteTodo = (args: { id: number }) => dispatch(TodoActionCreator.deleteTodo(args));
  return <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
};

export default TodoListContainer;
export { TodoList };
