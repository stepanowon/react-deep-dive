import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count + 1);
    }, 1500);
    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log(count);
    }, 1500);
    return () => clearInterval(timer);
  }, [count]);

  return <div>Hello world</div>;
}