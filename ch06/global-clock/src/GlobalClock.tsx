import { useEffect, useState } from "react";
import TimeZone from "./TimeZone";
import moment from "moment-timezone";
import Clock from "react-clock";
import { ClockType } from "./App";

type PropsType = {
  clock: ClockType;
  deleteClock: (id: string) => void;
  changeTimeZone: (id: string, timeZone: string) => void;
};

const GlobalClock = ({ clock, deleteClock, changeTimeZone }: PropsType) => {
  const [time, setTime] = useState<string>(moment().tz(clock.timeZone).format().substring(0, 19));
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const handle = setInterval(() => {
      console.log("## tick");
      const currentTime = moment().tz(clock.timeZone).format().substring(0, 19);
      setTime(currentTime.replace("T", " "));
      setDate(new Date(currentTime));
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  }, [clock]);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 justify-content-center p-1">
      <div className="border p-2">
        <div className="container d-flex align-items-center justify-content-center">
          <Clock value={date} />
        </div>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>{time}</h5>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <TimeZone clock={clock} changeTimeZone={changeTimeZone} />
          <button onClick={() => deleteClock(clock.id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalClock;
