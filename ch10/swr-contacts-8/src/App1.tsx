import { useState } from "react";
import ContactList1 from "./ContactList1";
import useSWR from "swr";
import { fetchContactList } from "./apis/ContactAPI";
import { ReactCsspin } from "react-csspin";

const App1 = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, error, isLoading } = useSWR(`/contacts_long?pageno=${pageNo}`, fetchContactList);

  const prev = () => {
    if (data && data.pageno > 1) {
      setPageNo(pageNo - 1);
    }
  };
  const next = () => {
    if (data && data.pageno < Math.floor((data.totalcount - 1) / data.pagesize) + 1) {
      setPageNo(pageNo + 1);
    }
  };

  return (
    <div>
      <ContactList1 data={data} /> <button onClick={prev}>이전</button>{" "}
      {data ? (
        <span>
          {" "}
          {data.pageno} / {Math.floor((data.totalcount - 1) / data.pagesize) + 1}{" "}
        </span>
      ) : (
        <span> 0 / 0 </span>
      )}
      <button onClick={next}>다음</button> {error ? <div>로딩 에러 : {error.message}</div> : ""}{" "}
      {isLoading ? <ReactCsspin opacity={0.8} message="로딩중" /> : ""}{" "}
    </div>
  );
};

export default App1;
