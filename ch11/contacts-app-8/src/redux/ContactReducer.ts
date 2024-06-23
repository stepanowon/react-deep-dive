import { createReducer } from "@reduxjs/toolkit";
import { ContactStateType, searchContactsAsync } from "./ContactAction";

const initialState: ContactStateType = { contacts: [], isLoading: false, status: "" };

const ContactReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(searchContactsAsync.pending, (state, action) => {
      state.isLoading = true;
      state.status = action.meta.arg.name + " 포함 이름으로 조회중";
    })
    .addCase(searchContactsAsync.fulfilled, (state, action) => {
      state.contacts = action.payload.contacts;
      state.isLoading = false;
      state.status = "조회 완료";
    })
    .addCase(searchContactsAsync.rejected, (state, action) => {
      state.contacts = [];
      state.isLoading = false;
      state.status = "조회 실패 : " + action.payload && action.payload?.message ? action.payload.message : "알 수 없는 오류";
    });
});

export default ContactReducer;
