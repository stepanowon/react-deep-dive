import { useState } from "react";

type TodoListItemType = {
  id: number;
  todo: string;
};

const getTodoListCount = (todoList: Array<TodoListItemType>) => {
  console.log("## TodoList 카운트 : ", todoList.length);
  return todoList.length;
};

const App = () => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = (todo: string) => {
    const newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
    setTodoList(newTodoList);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    const index = todoList.findIndex((item) => item.id === id);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="boxStyle">
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      <br />
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo}&nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>todo 개수 : {getTodoListCount(todoList)}</div>
    </div>
  );
};
export default App;
