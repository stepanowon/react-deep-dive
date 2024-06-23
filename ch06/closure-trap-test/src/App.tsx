import { useEffect, useRef, useState } from "react";

const App = () => {
  const [remainSecs, setRemainSecs] = useState<number>(20);
  const [message,setMessage] = useState<string>("");

  const timerHandle = useRef<number>();

  useEffect(()=> {
    setInterval(()=>{
      console.log(remainSecs);
      if (remainSecs <= 1) {
        setMessage("타이머 종료");
        clearInterval(timerHandle.current);
        setRemainSecs(20);
      }
    }, 1000)
  }, [])

  const start = () => {
    setMessage("");
    timerHandle.current = setInterval(()=>{
      setRemainSecs((remainSecs)=>remainSecs-1);
    }, 1000)
  }

  return (
    <div>
      <button onClick={start}>타이머 시작</button>
      <h2>남은 시간 : {remainSecs}</h2>
      { message === "" ? message : "" }
    </div>
  );
};

export default App;