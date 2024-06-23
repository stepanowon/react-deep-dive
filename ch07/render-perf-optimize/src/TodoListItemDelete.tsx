import React from "react";

type PropsType = {
  id: number;
  deleteTodo: (id: number) => void;
};

const TodoListItemDelete = React.memo(({ id, deleteTodo }: PropsType) => {
  console.log("## TodoListItemDelete");
  return (
    <span style={{ cursor: "pointer", color: "blue" }} onClick={() => deleteTodo(id)}>
      삭제
    </span>
  );
});

export default TodoListItemDelete;
