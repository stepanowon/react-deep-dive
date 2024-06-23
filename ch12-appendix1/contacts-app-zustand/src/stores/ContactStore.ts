import axios from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type ContactItemType = {
  no: string;
  name: string;
  tel: string;
  address: string;
  photo: string;
};

export type ContactStateType = {
  contacts: ContactItemType[];
  isLoading: boolean;
  status: string;
  searchContacts: (name: string) => void;
};

const useContactStore = create<ContactStateType>()(
  immer((set) => ({
    contacts: [],
    isLoading: false,
    status: "",
    searchContacts: async (name: string) => {
      try {
        set((state) => {
          state.isLoading = true;
          state.status = "pending";
        });
        const url = "http://localhost:3000/contacts_long/search/" + name;
        const response = await axios.get(url);
        set((state) => {
          state.isLoading = false;
          state.contacts = response.data;
          state.status = "completed";
        });
      } catch (err) {
        set((state) => {
          state.isLoading = false;
          state.status = "failed";
        });
      }
    },
  }))
);

export default useContactStore;
