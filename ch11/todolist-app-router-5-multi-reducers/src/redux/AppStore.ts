import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import TimeReducer, { TimeStatesType } from "./TimeReducer";
import TodoReducer, { TodoStatesType } from "./TodoReducer";

export type RootStatesType = {
  home: TimeStatesType;
  todos: TodoStatesType;
};

const RootReducer = combineReducers({ home: TimeReducer, todos: TodoReducer });

const AppStore = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export default AppStore;
