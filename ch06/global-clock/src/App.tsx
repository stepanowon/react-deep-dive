import { useState } from "react";
import GlobalClock from "./GlobalClock";
import uuid from "react-uuid";

export type ClockType = {
  id: string;
  timeZone: string;
};

const App = () => {
  const [clockList, setClockList] = useState<ClockType[]>([]);
  const deleteClock = (id: string) => {
    const newClockList = clockList.filter((clock) => clock.id !== id);
    setClockList(newClockList);
  };
  const addClock = () => {
    const newClockList = [...clockList, { id: uuid(), timeZone: "Asia/Seoul" }];
    setClockList(newClockList);
  };

  const changeTimeZone = (id: string, timeZone: string) => {
    const newClockList = clockList.map((clock) => {
      return id === clock.id ? { ...clock, timeZone: timeZone } : clock;
    });
    setClockList(newClockList);
  };

  const clocks = clockList.map((clock) => {
    return <GlobalClock key={clock.id} clock={clock} deleteClock={deleteClock} changeTimeZone={changeTimeZone} />;
  });

  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2>세계 각 지역의 시간</h2>
          </div>
          <div className="col-12">
            <button className="float-end" onClick={addClock}>
              세계 시간 추가
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">{clocks}</div>
      </div>
    </div>
  );
};

export default App;
