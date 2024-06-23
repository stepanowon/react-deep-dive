import { useMutation } from "@tanstack/react-query";
import { TodoType, deleteTodo } from "../apis/TodoAPI";
import { ReactCsspin } from "react-csspin";

type PropsType = { owner: string; todoItem: TodoType; refetch: () => void };

const TodoListItem = ({ owner, todoItem, refetch }: PropsType) => {
  const deleteTodoMutation = useMutation({
    mutationFn: ({ id }: { id: number }) => deleteTodo({ owner, id }),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <>
      <li>
        <button onClick={() => deleteTodoMutation.mutate({ id: todoItem.id })}>삭제</button> {todoItem.todo} - {todoItem.desc}{" "}
        {todoItem.done ? "(완료)" : ""}
      </li>
      {deleteTodoMutation.isPending ? <ReactCsspin opacity={0.8} message="삭제중입니다" /> : ""}
    </>
  );
};

export default TodoListItem;
