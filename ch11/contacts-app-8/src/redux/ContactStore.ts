import { Middleware, configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./ContactReducer";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("action ", action);
  next(action);
  console.log("state: ", store.getState());
};

const ContactStore = configureStore({
  reducer: ContactReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat([logger]);
  },
});

export default ContactStore;
