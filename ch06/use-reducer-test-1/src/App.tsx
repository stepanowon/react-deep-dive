import TodoList1 from "./components/TodoList1";
import TodoList2 from "./components/TodoList2";

const App = () => {
  return (
    <div>
      <h2>useReducer 적용</h2>
      <hr />
      <div className="container">
        <TodoList1 />
        <TodoList2 />
      </div>
    </div>
  );
};

export default App;
