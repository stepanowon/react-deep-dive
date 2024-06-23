import React, { useEffect, useState } from 'react';

const App1 = () => {
  const [seconds, setSeconds ] = useState(100);
  const [timer, setTimer] = useState(seconds);
  const [handle, setHandle] = useState(null);

  const setTimerSeconds = (e) => {
    let timeSecs = parseInt(e.target.value, 10);
    timeSecs = isNaN(timeSecs) ? 100 : timeSecs >= 10 ? timeSecs : 10;
    setSeconds(timeSecs);
  }

  useEffect(()=>{
    if (timer < 1) {
      clearInterval(handle);
      console.log("타이머 종료");
    }
  }, [timer])

  const startTimer = () => {
    setTimer(()=>seconds);
    let tempHandle = setInterval(()=> {
      console.log("## tick")
      setTimer((timer) => timer-1);
    }, 1000)
    setHandle(tempHandle);
  }

  const stopTimer = () => {
    clearInterval(handle);
    setTimer(seconds);
  }

  return (
    <div>
      <h2>타이머 설정</h2>
      <hr/>
      시간 설정 : <input type="text" value={seconds} onChange={setTimerSeconds} />
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>중지</button>
      <hr />
      타이머 : {timer}
    </div>
  );
};

export default App1;