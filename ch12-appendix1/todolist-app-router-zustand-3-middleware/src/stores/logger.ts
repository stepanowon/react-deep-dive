import { StateCreator, StoreApi } from "zustand";

export declare type LoggerType<S> = (state: S) => S;

export const logger = <S>(stateCreater: StateCreator<S>) => {
  return (set: StoreApi<S>["setState"], get: StoreApi<S>["getState"], api: StoreApi<S>): S => {
    const state = stateCreater(
      (...args) => {
        set(...args);
        console.log("## 변경된 상태 : ", get());
      },
      get,
      api
    );
    return { ...state };
  };
};
