import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const ContactActionCreator = {
  searchContactsPending: createAction("searchContactsPending"),
  searchContactsFulfilled: createAction("searchContactsFulfilled"),
  searchContactsRejected: createAction("searchContactsRejected"),
  asyncSearchContacts: (name) => {
    return async (dispatch) => {
      let url = "http://localhost:3000/contacts_long/search/" + name;
      try {
        dispatch(ContactActionCreator.searchContactsPending({ name }));
        const response = await axios.get(url);
        dispatch(ContactActionCreator.searchContactsFulfilled({ contacts: response.data }));
      } catch (error) {
        dispatch(ContactActionCreator.searchContactsRejected({ status: error }));
      }
    };
  },
};
