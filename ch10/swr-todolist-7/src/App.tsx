import useSWR from "swr";
import { addTodo, fetchTodoList } from "./apis/TodoListAPI";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const { data, error, isLoading, isValidating } = useSWR("/todolist_long/gdhong", fetchTodoList);
  const { trigger, isMutating } = useSWRMutation("/todolist_long/gdhong", addTodo);

  const addTodoHandler = () => {
    trigger({ todo, desc });
    setTodo("");
    setDesc("");
  };

  return (
    <div>
      <h2>간단한 SWR 예제</h2>
      <hr />
      <div>
        todo : <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <br />
        desc : <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <br />
        <button onClick={addTodoHandler}>추가</button>
      </div>
      <hr />
      <ul>
        {data
          ? data.map((item) => {
              return (
                <li>
                  {item.todo} - {item.desc}
                  {item.done ? " (완료)" : ""}
                </li>
              );
            })
          : ""}
      </ul>
      {isMutating ? <h2>업데이트 중</h2> : ""}
      {isLoading || isValidating ? <h2>로딩중</h2> : ""}
      {error ? <h2>에러 : {error.message}</h2> : ""}
    </div>
  );
};

export default App;
