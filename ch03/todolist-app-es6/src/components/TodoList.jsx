import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, deleteTodo, toggleDone }) => {
  let items = todoList.map((item) => {
    return <TodoListItem key={item.no} todoItem={item} 
                deleteTodo={deleteTodo} toggleDone={toggleDone} />;
  });

  return (
    <div className="row">
      {" "}
      <div className="col">
        <ul className="list-group">{items}</ul>
      </div>
    </div>
  );
};

export default TodoList;
