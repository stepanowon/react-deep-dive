import { useCallback, useState } from "react";
import TodoList from "./TodoList";
import { produce } from "immer";
import AddTodo from "./AddTodo";

export type TodoListItemType = { id: number; todo: string };

const App = () => {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([]);

  const addTodo = useCallback(
    (todo: string) => {
      const newTodoList = produce(todoList, (draft) => {
        draft.push({ id: new Date().getTime(), todo: todo });
      });
      setTodoList(newTodoList);
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
      <AddTodo addTodo={addTodo} />
      <br />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <div>todo 갯수 : {todoList.length}</div>
    </div>
  );
};

export default App;
