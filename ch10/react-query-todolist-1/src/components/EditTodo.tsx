type PropsType = { owner: string };
const EditTodo = ({ owner }: PropsType) => {
  return <div>EditTodo - {owner}</div>;
};

export default EditTodo;
