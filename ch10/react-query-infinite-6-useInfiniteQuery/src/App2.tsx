import { useState } from "react";
import Contact from "./Contact";
import { ContactType, useContactsPageQuery } from "./apis/ContactsAPI";
import { ReactCsspin } from "react-csspin";

const App2 = () => {
  const [page, setPage] = useState(1);
  const { isError, error, data, isFetching } = useContactsPageQuery(page);
  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  };
  const goNext = () => {
    if (page <= Math.floor((data.totalcount - 1) / data.pagesize)) setPage(page + 1);
  };

  return (
    <div>
      <h2>연락처 페이징 예제</h2>
      <hr />
      { isFetching ? <ReactCsspin opacity={0.8} message="로딩중" /> : "" }
      { isError ? <h3>에러 : {error.message} </h3> : "" }
      <div>
        <ul>
          {data &&
            data.contacts.map((c: ContactType) => {
              return <Contact key={c.no} contactItem={c} />;
            })}
        </ul>
        { data && data.pageno ? 
        (<>
        <button onClick={goPrev} disabled={data.pageno <= 1}>
          Prev
        </button>
        <span style={{ marginLeft: 20, marginRight: 20 }}>
          {data.pageno} / {Math.floor((data.totalcount + 1) / data.pagesize)}
        </span>
        <button onClick={goNext} disabled={data.pageno >= Math.floor((data.totalcount + 1) / data.pagesize)}>
          Next
        </button>
        </>)
        : "" }
      </div>
    </div>
  );
};

export default App2;
