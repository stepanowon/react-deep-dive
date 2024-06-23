import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASEURL = "http://localhost:3000/contacts_long";

export type ContactType = {
  no: string;
  name: string;
  tel: string;
  address: string;
  photo: string;
};

export const useContactsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["contacts"],
    queryFn: ({ pageParam = 1 }) => {
      return axios.get(BASEURL, { params: { pageno: pageParam, pagesize: 10 } }).then((response) => response.data);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.pageno + 1; // 다음 페이지를 호출할 때 사용 될 pageParam
    },
  });
};

export const useContactsPageQuery = (pageno: number) => {
  return useQuery({
    queryKey: ["contacts", pageno],
    queryFn: () => {
      return axios.get(BASEURL, { params: { pageno: pageno, pagesize: 10 } }).then((response) => response.data);
    },
    placeholderData: keepPreviousData,
  });
};
