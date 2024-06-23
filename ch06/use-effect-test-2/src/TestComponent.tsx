import { useEffect, useState } from "react";

const TestComponent = () => {
  const [name, setName] = useState<string>("se");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("name : " + name);
    return () => {
      console.log("## name cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("count : " + count);
    return () => {
      console.log("## count cleanup");
    };
  }, []);

  return (
    <div style={{ padding: "10px", border: "solid 1px gray" }}>
      이름 : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <button onClick={() => setCount(count - 1)}>count 감소</button>
      <hr />
      이름 : <span>{name}</span>
      <br />
      카운트 : <span>{count}</span>
      <br />
    </div>
  );
};

export default TestComponent;
