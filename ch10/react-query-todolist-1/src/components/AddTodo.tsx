type PropsType = { owner: string };
const AddTodo = ({ owner }: PropsType) => {
  return <div>AddTodo - {owner}</div>;
};

export default AddTodo;
