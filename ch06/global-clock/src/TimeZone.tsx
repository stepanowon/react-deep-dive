import { ChangeEvent } from "react";
import timeZoneList from "./timeZoneList";
import { ClockType } from "./App";

type PropsType = {
  clock: ClockType;
  changeTimeZone: (id: string, timeZone: string) => void;
};

const TimeZone = ({ clock, changeTimeZone }: PropsType) => {
  const options = timeZoneList.map((timeZone) => {
    return (
      <option key={timeZone} value={timeZone}>
        {timeZone}
      </option>
    );
  });
  const onChangeTimeZone = (e: ChangeEvent<HTMLSelectElement>) => {
    changeTimeZone(clock.id, e.target.value);
  };

  return (
    <select onChange={onChangeTimeZone} defaultValue={clock.timeZone}>
      {options}
    </select>
  );
};

export default TimeZone;
