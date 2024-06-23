const TodoListItem = ({ todoItem, deleteTodo, toggleDone }) => {
  let itemClassName = "list-group-item";
  if (todoItem.done) itemClassName += " list-group-item-success";

  return (
    <li className={itemClassName}>
      <span className={todoItem.done ? "todo-done pointer" : "pointer"} 
          onClick={() => toggleDone(todoItem.no)}>
        {todoItem.todo}
        {todoItem.done ? " (완료)" : ""}
      </span>
      <span className="float-end badge bg-secondary pointer" 
          onClick={() => deleteTodo(todoItem.no)}>
        삭제
      </span>
    </li>
  );
};
  
export default TodoListItem;
  