import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 2000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      console.log(count);
    }, 2000);
  }, []);

  return <div>카운트 : {count}</div>;
};

export default App;
