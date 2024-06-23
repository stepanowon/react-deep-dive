import { useBoundStore } from "../stores";

const Home = () => {
  const count = useBoundStore((state) => state.count);
  const increment = useBoundStore((state) => state.increment);

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
