import { useCountStore } from "../stores/useCountStore";

const Home = () => {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);

  return (
    <div className="card card-body">
      <div>
        <button onClick={() => increment()}>Increment</button>
        <p>count : {count}</p>
      </div>
    </div>
  );
};
export default Home;
