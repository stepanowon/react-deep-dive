import { Link, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import { useRef, useState } from "react";

const App = () => {
  const [owner, setOwner] = useState<string>("gdhong");
  const refOwner = useRef<HTMLInputElement>(null);
  const changeOwner = () => {
    //기본값 gdhong
    const owner = refOwner.current?.value ? refOwner.current.value : "gdhong";
    setOwner(owner);
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="/add">AddTodo</Link>
      </div>
      <hr />
      <div>
        할일 소유자 : <input type="text" defaultValue={owner} ref={refOwner} />
        <button onClick={changeOwner}>소유자 변경</button>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<TodoList owner={owner} />} />
        <Route path="/add" element={<AddTodo owner={owner} />} />
        <Route path="/edit/:id" element={<EditTodo owner={owner} />} />
      </Routes>
    </div>
  );
};

export default App;
