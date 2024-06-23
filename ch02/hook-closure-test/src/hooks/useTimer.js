import { useEffect, useState } from "react";

const useTimer = (endMessage) => {
    const [timer, setTimer] = useState(10);
    const [handle, setHandle] = useState(null);
  
    useEffect(()=>{
      if (timer < 1) {
        clearInterval(handle);
        console.log(endMessage);
      }
    }, [timer])
  
    const startTimer = (timer) => {
      setTimer(timer);
      let tempHandle = setInterval(()=> {
        setTimer((timer) => timer-1);
      }, 1000)
      setHandle(tempHandle);
    }
  
    const stopTimer = () => {
      clearInterval(handle);
    }
 
    return { timer, startTimer, stopTimer };
}

export { useTimer };