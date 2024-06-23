import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import useTodoStore from "../stores/useTodoStore";

const TodoList = () => {
  //store의 상태중 필요로 하는 것만 바인딩
  const todoList = useTodoStore((state) => state.todoList);
  const toggleDone = useTodoStore((state) => state.toggleDone);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

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

export default TodoList;
