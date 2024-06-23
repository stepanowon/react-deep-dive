import React, { useState } from 'react';
import { useTimer } from './hooks/useTimer';

const App2 = () => {
    const [seconds1, setSeconds1 ] = useState(10);
    const [seconds2, setSeconds2 ] = useState(15);

    const { timer:timer1, startTimer:startTimer1, stopTimer:stopTimer1 } = useTimer("타이머1 종료");
    const { timer:timer2, startTimer:startTimer2, stopTimer:stopTimer2 } = useTimer("Timer2 is finished");

    const setTimerSeconds1 = (e) => {
        let timeSecs = parseInt(e.target.value, 10);
        timeSecs = isNaN(timeSecs) ? 100 : timeSecs >= 10 ? timeSecs : 10;
        setSeconds1(timeSecs);
    }    

    const setTimerSeconds2 = (e) => {
        let timeSecs = parseInt(e.target.value, 10);
        timeSecs = isNaN(timeSecs) ? 100 : timeSecs >= 10 ? timeSecs : 10;
        setSeconds2(timeSecs);
    }    

    return (
        <div>
            <div style={{ border: "solid 1px blue", margin:"10px" }}>
                <h2>타이머1 설정</h2>
                <hr/>
                시간 설정 : <input type="text" value={seconds1} onChange={setTimerSeconds1} />
                <button onClick={()=>startTimer1(seconds1)}>시작</button>
                <button onClick={stopTimer1}>중지</button>
                <hr />
                타이머1 : {timer1}
            </div>
            <div style={{ border: "solid 1px blue", margin:"10px" }}>
                <h2>타이머2 설정</h2>
                <hr/>
                시간 설정 : <input type="text" value={seconds2} onChange={setTimerSeconds2} />
                <button onClick={()=>startTimer2(seconds2)}>시작</button>
                <button onClick={stopTimer2}>중지</button>
                <hr />
                타이머2 : {timer2}
            </div>
        </div>
    );
};

export default App2;