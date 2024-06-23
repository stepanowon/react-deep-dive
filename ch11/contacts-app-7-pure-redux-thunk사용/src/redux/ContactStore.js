import { configureStore } from "@reduxjs/toolkit";
import { ContactReducer } from "./ContactReducer";

const logger = (store) => (next) => (action) => {
  console.log("## action : ", action);
  console.log("## state : ", store.getState());
  next(action);
};

const ContactStore = configureStore({
  reducer: ContactReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat([logger]);
  },
});

export default ContactStore;
