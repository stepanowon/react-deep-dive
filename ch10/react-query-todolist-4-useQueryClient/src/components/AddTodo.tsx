import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addTodo } from "../apis/TodoAPI";
import { useNavigate } from "react-router-dom";
import { ReactCsspin } from "react-csspin";

type PropsType = { owner: string };

const AddTodo = ({ owner }: PropsType) => {
  const [todo, setTodo] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const navigate = useNavigate();

  const addTodoMutation = useMutation({
    mutationFn: ({ todo, desc }: { todo: string; desc: string }) => addTodo({ owner, todo, desc }),
    onSuccess: () => {
      navigate("/");
    },
  });

  const addTodoHandler = () => {
    addTodoMutation.mutate({ todo, desc });
    setTodo("");
    setDesc("");
  };

  return (
    <div>
      <h2>할일 추가</h2>
      <hr />
      <div>
        Todo : <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /> <br />
        Desc : <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} /> <br />
        <button onClick={addTodoHandler}>추가</button>
      </div>
      {addTodoMutation.isPending ? <ReactCsspin opacity={0.8} message="추가중입니다" /> : ""}
    </div>
  );
};

export default AddTodo;
