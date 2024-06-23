import TodoList from './TodoList';
import InputTodo from './InputTodo';

const App = ({ todoList, addTodo, deleteTodo, toggleDone }) => {
    return (
      <div className="container">
        <div className="card card-body bg-light">
          <div className="title">:: Todolist App</div>
        </div>
        <div className="card card-default card-borderless">
          <div className="card-body">
            <InputTodo addTodo={addTodo} />
            <TodoList
              todoList={todoList}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    );
};

export default App;