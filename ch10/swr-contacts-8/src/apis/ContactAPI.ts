import axios from "axios";

const BASEURL = "http://localhost:3000";

export type ContactItemType = {
  no: number;
  name: string;
  tel: string;
  address: string;
  photo: string;
};

export type ContactListType = {
  pageno: number;
  pagesize: number;
  totalcount: number;
  contacts: ContactItemType[];
};

export const fetchContactList = (url: string) => {
  const fetchUrl = `${BASEURL}${url}`;
  return axios.get<ContactListType>(fetchUrl).then((response) => response.data);
};
