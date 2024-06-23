type PropsType = { owner: string };

const TodoList = ({ owner }: PropsType) => {
  return <div>TodoList - {owner}</div>;
};

export default TodoList;
