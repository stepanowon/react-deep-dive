import { ReactCsspin } from "react-csspin";
import { ContactType, useContactsInfiniteQuery } from "./apis/ContactsAPI";
import Contact from "./Contact";

const App1 = () => {
  const { data, isFetching, fetchNextPage, status } = useContactsInfiniteQuery();

  console.log("### status : ", status);
  return (
    <div>
      <h2>연락처 무한 스크롤 예제</h2>
      <hr />
      <ul>
        {data &&
          data.pages.map((page) => {
            return page.contacts.map((c: ContactType) => {
              return <Contact key={c.no} contactItem={c} />;
            });
          })}
      </ul>
      <button onClick={() => fetchNextPage()}>Get Next Page!!</button>
      {isFetching ? <ReactCsspin opacity={0.8} message="로딩중" /> : ""}
    </div>
  );
};

export default App1;
