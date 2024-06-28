export const CountAction = {
  increment: (value: number) => ({ type: "INCREMENT", payload: { value } }),
};

export type CountStateType = { count: number };
export type CountActionType = ReturnType<typeof CountAction.increment>;

export const CountReducer = (state: CountStateType, action: CountActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.value };
    default:
      return state;
  }
};
