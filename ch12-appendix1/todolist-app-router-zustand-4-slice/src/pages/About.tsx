import { useBoundStore } from "../stores";

const About = () => {
  const initialize = useBoundStore((state) => state.initialize);
  const getAllStates = useBoundStore((state) => state.getAllStates);

  return (
    <div className="card card-body">
      <h2>About</h2>
      <hr />
      <button onClick={() => console.log(getAllStates())}>상태만 확인-Console.log확인</button>
      <button onClick={() => initialize()}>상태 초기화</button>
    </div>
  );
};
export default About;
