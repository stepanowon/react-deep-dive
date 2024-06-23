import { useState } from "react";

type PropsType = {
  addTodo: (todo: string) => void;
};

const AddTodo = ({ addTodo }: PropsType) => {
  const [todo, setTodo] = useState<string>("");

  const addTodoHandler = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
