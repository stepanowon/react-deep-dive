import { createAction } from "@reduxjs/toolkit";

const TimeActionCreator = {
  changeTime: createAction<{ currentTime: Date }>("changeTime"),
};

export default TimeActionCreator;
