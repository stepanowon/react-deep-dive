import { useState } from "react";
import useContactStore from "./stores/ContactStore";

const App = () => {
  const isLoading = useContactStore((state) => state.isLoading);
  const contacts = useContactStore((state) => state.contacts);
  const status = useContactStore((state) => state.status);
  const searchContacts = useContactStore((state) => state.searchContacts);

  const [name, setName] = useState("");
  const searchHandler = () => {
    searchContacts(name);
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={searchHandler}>조회</button>
      <br />
      {isLoading ? (
        <h3>로딩중</h3>
      ) : (
        <ul>
          {contacts.map((item) => {
            return (
              <li key={item.no}>
                {item.name} : {item.tel} : {item.address}{" "}
              </li>
            );
          })}
        </ul>
      )}
      <h5>상태 : {status}</h5>
    </div>
  );
};

export default App;
