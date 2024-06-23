import { useState } from "react";

type TodoItemType = {
  id: number;
  todo: string;
};

const TodoList1 = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItemType[]>([
    { id: 1, todo: "운동1" },
    { id: 2, todo: "독서1" },
    { id: 3, todo: "음악감상1" },
  ]);

  const addTodo = () => {
    const newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
    setTodoList(newTodoList);
    setTodo("");
  };
  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== id);
    setTodoList(newTodoList);
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
