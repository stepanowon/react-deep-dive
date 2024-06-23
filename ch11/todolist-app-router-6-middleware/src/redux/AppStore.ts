import { configureStore } from "@reduxjs/toolkit";
import { Middleware, combineReducers } from "redux";
import TimeReducer, { TimeStatesType } from "./TimeReducer";
import TodoReducer, { TodoStatesType } from "./TodoReducer";

export type RootStatesType = {
  home: TimeStatesType;
  todos: TodoStatesType;
};

const RootReducer = combineReducers({ home: TimeReducer, todos: TodoReducer });

const logger: Middleware = (store) => (next) => (action) => {
  console.log("## 전달된 action : ", action);
  console.log("## 변경전 state : ", store.getState());
  next(action);
  console.log("## 변경후 state : ", store.getState());
};

const AppStore = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(logger);
  },
});

export default AppStore;
