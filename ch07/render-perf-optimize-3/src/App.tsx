import { useCallback, useState } from "react";
import TodoList from "./TodoList";
import { produce } from "immer";

export type TodoListItemType = { id: number; todo: string };

const App = () => {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = useCallback(
    (todo: string) => {
      const newTodoList = produce(todoList, (draft) => {
        draft.push({ id: new Date().getTime(), todo: todo });
      });
      setTodoList(newTodoList);
      setTodo("");
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    (id: number) => {
      const index = todoList.findIndex((item) => item.id === id);
      const newTodoList = produce(todoList, (draft) => {
        draft.splice(index, 1);
      });
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <div className="boxStyle">
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      <br />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <div>todo 갯수 : {todoList.length}</div>
    </div>
  );
};

export default App;
