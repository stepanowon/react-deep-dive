import { createReducer } from "@reduxjs/toolkit";
import { ContactActionCreator } from "./ContactActionCreator";

const initialState = {
  contacts: [],
  isLoading: false,
  status: "",
};

export const ContactReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ContactActionCreator.searchContactsPending, (state,action) => {
        state.contacts = [];
        state.isLoading = true;
        state.status = `조회중 : 검색명( ${action.payload.name} )`;
    })
    .addCase(ContactActionCreator.searchContactsFulfilled, (state, action) => {
      state.contacts = action.payload.contacts;
      state.isLoading = false;
      state.status = "조회 완료";
    })
    .addCase(ContactActionCreator.searchContactsRejected, (state, action) => {
      state.contacts = [];
      state.isLoading = false;
      state.status = "조회 실패 : " + action.payload.status;
    });
});
