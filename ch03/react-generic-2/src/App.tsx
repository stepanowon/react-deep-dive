import { useEffect, useRef, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";

type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

const App = () => {
  const [owner, setOwner] = useState<string>("mrlee");
  const refOnwer = useRef<HTMLInputElement | null>(null);
  const { response, isLoading, error, requestData } = useFetch<TodoItemType[]>(`/todolist_long/${owner}`, { timeout: 5000 });

  const setOnwerHandler = () => {
    const newOwner = refOnwer.current?.value;
    if (newOwner) {
      setOwner(newOwner);
    }
  };

  useEffect(() => {
    requestData();
  }, [owner]);

  return (
    <div>
      사용자명 : <input type="text" defaultValue={owner} ref={refOnwer} />
      <button onClick={setOnwerHandler}>설정</button>
      <hr />
      <h2>{owner}님의 할일 목록</h2>
      <hr />
      <ul>
        {error ? (
          <div>
            <h3>에러 발생 : {error.message}</h3>
          </div>
        ) : (
          response?.data.map((todoItem: TodoItemType) => {
            return (
              <li key={todoItem.id} style={todoItem.done ? { textDecoration: "line-through" } : {}}>
                {todoItem.todo} - {todoItem.desc}
                {"  "}
                {todoItem.done ? "(완료)" : ""}
              </li>
            );
          })
        )}
        {isLoading ? <ReactCsspin opacity={0.8} /> : ""}
      </ul>
    </div>
  );
};

export default App;
