import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ContactActionCreator } from "./redux/ContactActionCreator";

const App = ({ contacts, isLoading, status, asyncSearchContacts }) => {
  const [name, setName] = useState("");
  const search = () => {
    asyncSearchContacts(name);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={search}>조회</button>
      <br />
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.no}>
              {item.name} : {item.tel} : {item.address}{" "}
            </li>
          );
        })}
      </ul>
      {isLoading ? <h3>{status}</h3> : ""}
    </div>
  );
};

export const AppContainer = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state)=>state.contacts);
  const isLoading = useSelector((state)=>state.isLoading);
  const status = useSelector((state)=>state.status);

  const asyncSearchContacts = (name)=>dispatch(ContactActionCreator.asyncSearchContacts(name));

  return <App contacts={contacts} isLoading={isLoading} status={status} 
            asyncSearchContacts={asyncSearchContacts} />
}

export default App;