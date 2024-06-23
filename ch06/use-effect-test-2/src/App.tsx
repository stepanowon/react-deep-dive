import { useState } from "react";
import TestComponent from "./TestComponent";

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>TestComponent 토글</button>
      <hr />
      {isVisible ? <TestComponent /> : ""}
    </div>
  );
};

export default App;
