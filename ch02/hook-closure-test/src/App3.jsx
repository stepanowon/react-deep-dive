import { useMousePosition } from "./hooks/useMousePosition";


const App3 = () => {
  const position = useMousePosition();

  return (
    <h2>
      커스텀 훅 적용 [ {position.x}, {position.y} ]
    </h2>
  );
};

export default App3;
