import { useReducer, useState } from "react";
import { TodoActionCreator, TodoItemType, TodoReducer } from "../TodoReducer";

const initialTodoList1: TodoItemType[] = [
  { id: 1, todo: "운동1" },
  { id: 2, todo: "독서1" },
  { id: 3, todo: "음악감상1" },
];

const TodoList1 = () => {
  const [todoList, dispatchTodoList] = useReducer(TodoReducer, initialTodoList1);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    dispatchTodoList(TodoActionCreator.addTodo(todo));
    setTodo("");
  };
  const deleteTodo = (id: number) => {
    dispatchTodoList(TodoActionCreator.deleteTodo(id));
  };

  return (
    <div style={{ margin: "10px", padding: "10px", border: "solid 1px gray" }}>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button onClick={addTodo}>할일 추가</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo} &nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList1;
